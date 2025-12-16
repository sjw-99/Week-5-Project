const db = require('../db/connect')

class Student {
    constructor({ topic_id, topic, topic_percent}) {
    this.topic_id = topic_id 
    this.topic = topic 
    this.topic_percent = topic_percent
    }

    static async addScoreToStudent() {
        console.log('hi 2');
        const current_mission = await db.query('SELECT * FROM current;')
        console.log(current_mission.rows.length);
        const percentTable = await db.query('SELECT topic, count(*) FROM current WHERE student_option=correct_option GROUP BY topic;')
        console.log(percentTable.rows.length);
        if(current_mission.rows.length == 10) {
            const correct_topic = percentTable.rows[0]['topic'];
            const correct_counter = percentTable.rows[0]['count']
            console.log(correct_topic);
            console.log(correct_counter);
            let response = await db.query('INSERT INTO student (topic,topic_percent) VALUES ($1, $2);',[correct_topic,correct_counter])
        } else {
            throw new Error('10 Questions need to be completed to generate summary')
        }

        //let response = await db.query('INSERT INTO student (topic,topic_percent) $1;',[percentTable])
    }
}

module.exports = Student