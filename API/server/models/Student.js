const db = require('../db/connect')

class Student {
    constructor({ topic_id, topic, topic_percent}) {
    this.topic_id = topic_id 
    this.topic = topic 
    this.topic_percent = topic_percent
    }

    static async addScoreToStudent() {
        console.log('test');
        const current_mission = await db.query('SELECT * FROM current;')
        const percentTable = await db.query('SELECT topic, count(*) FROM current GROUP BY topic;') //WHERE student_option=correct_option
        console.log(current_mission.rows.length);
        console.log(percentTable.rows.length);
        if(current_mission.rows.length != 0) {
            if(percentTable.rows.length == 0) {
                const topic = await db.query('SELECT DISTINCT topic FROM current;')
                const correct_topic = topic.rows[0]
                const correct_counter = 0
                console.log(correct_topic);
                console.log(correct_counter);
            } else {
                const correct_topic = percentTable.rows[0]['topic']; 
                const correct_counter = percentTable.rows[0]['count'] * 10
                console.log(correct_topic);
                console.log(correct_counter);
            }  
            const response = await db.query('INSERT INTO student (topic,topic_percent) VALUES ($1, $2); Returning *',[correct_topic,correct_counter])
            console.log(response.rows[0]);
            return new Student(response.rows[0])
        } else {
            throw new Error('10 Questions need to be completed to generate summary')
        }

        //let response = await db.query('INSERT INTO student (topic,topic_percent) $1;',[percentTable])
    }
}

module.exports = Student