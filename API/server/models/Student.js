const db = require('../db/connect')

class Student {
    constructor({ topic_id, topic, topic_percent}) {
    this.topic_id = topic_id 
    this.topic = topic 
    this.topic_percent = topic_percent
    }

    static async addScoreToStudent() {
        const current_mission = await db.query('SELECT * FROM current;')
        const percentTable = await db.query('SELECT topic, count(*) FROM current WHERE student_option=correct_option GROUP BY topic;')
        if(current_mission.rows.length == 10) {
            const correct_topic = percentTable.rows[0]['topic']; 
            const correct_counter = percentTable.rows[0]['count'] 

            let response = await db.query('INSERT INTO student (topic,topic_percent) VALUES ($1, $2);',[correct_topic,correct_counter])
        } else {
            throw new Error('10 Questions need to be completed to generate summary')
        }

        //let response = await db.query('INSERT INTO student (topic,topic_percent) $1;',[percentTable])
    }
}

module.exports = Student