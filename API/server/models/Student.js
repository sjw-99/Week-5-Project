const db = require('../db/connect')

class Student {
    constructor({ topic_id, topic, topic_percent, times_completed, EXP}) {
    this.topic_id = topic_id 
    this.topic = topic 
    this.topic_percent = topic_percent
    this.times_completed = times_completed 
    this.EXP = EXP 
    }

    static async addScoreToStudent() {
        let response = await db.query('INSERT INTO student (topic, topic_percent) SELECT topic, 100 * count(*)/10 FROM current WHERE student_option=correct_option;')
        if (response.rows.length === 0) {
            throw new Error('No Missions completed')
        }
    }

}

module.exports = Student