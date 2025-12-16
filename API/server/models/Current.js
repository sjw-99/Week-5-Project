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

    static async addQuestionToCurrent(question_id) {
        const current_mission = await db.query('SELECT * FROM current;')
        if(current_mission.rows.length<10) {
            let response = await db.query('INSERT INTO current (question_id, question_intro, question,correct_option) VALUES (SELECT question_id, question_intro, question,correct_option FROM question WHERE question_id = $1);', [question_id] );
        } else {
            throw new Error('Current Mission full')
        }
    }
}

module.exports = Current;