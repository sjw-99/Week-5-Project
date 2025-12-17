const db = require('../db/connect')

class Current {
    constructor({ question_id, question_intro, question, student_option, correct_option,topic }) {
        this.question_id = question_id
        this.question_intro = question_intro
        this.question = question
        this.student_option = student_option
        this.correct_option = correct_option  
        this.topic = topic     
    }

    static async getAll() {
        const response = await db.query('SELECT * FROM current;')
        if (response.rows.length === 0) {
            throw new Error('No questions completed')
        }
        return response.rows.map(c => new Current(c))
    }

    static async clearTable() {
        await db.query('TRUNCATE TABLE current;');
        await db.query('DBCC CHECKIDENT (\'current\', RESEED, 0);')
    }

    static async getOneQuetsionById(question_id) {
        const response = await db.query('SELECT * FROM current WHERE question_id=$1;',[question_id])
        if(response.rows.length !=1) {
            throw new Error('Unable to find question')
        }
        return new Current(response.rows[0])
    }


    static async addQuestionToCurrent(question_id) {
        
        const current_mission = await db.query('SELECT * FROM current;')
        if(current_mission.rows.length >= 0) {
            let response = await db.query(
                    'INSERT INTO current (question_intro, question,correct_option,topic) SELECT question_intro, question,correct_option, topic FROM question WHERE question_id = $1;',[question_id]);
        } else {
            throw new Error('Current Mission full')
        }
    }
    async update(data) {
        const response = await db.query('UPDATE current SET student_option=$1 WHERE question_id=$2 RETURNING question_id, student_option;',[data.student_option, this.question_id] )
        if (response.rows.length != 1) {
            throw new Error("Unable to update student option.")
        }
        return new Current(response.rows[0]);
    }
}

module.exports = Current;