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
        const percentTable = await db.query('SELECT topic, count(*) FROM current WHERE = student_option=correct_option group by topic;')
        console.log(percentTable);
        //let response = await db.query('INSERT INTO student (topic,topic_percent) $1;',[percentTable])
    }

}

module.exports = Student