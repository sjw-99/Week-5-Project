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
        console.log(percentTable.rows.length);
        if(current_mission.rows.length != 0) {
            let correct_topic;
            let correct_counter;
            if(percentTable.rows.length != 0) {
                correct_topic = percentTable.rows[0]['topic']; 
                correct_counter = percentTable.rows[0]['count']*10
                console.log(correct_topic);
                console.log(correct_counter); 
            } else {
                const tempTable = await db.query('SELECT DISTINCT topic FROM current')
                correct_topic=tempTable.rows[0]['topic']
                correct_counter=0
                console.log(correct_topic);
                console.log(correct_counter); 
            }

            let response = await db.query('INSERT INTO student (topic,topic_percent) VALUES ($1, $2);',[correct_topic,correct_counter])
        } else {
            throw new Error('10 Questions need to be completed to generate summary')
        }

        //let response = await db.query('INSERT INTO student (topic,topic_percent) $1;',[percentTable])
    }

    static async getLastScore() {
        const latest = await db.query("SELECT * FROM student ORDER BY topic_id DESC LIMIT 1;")
        if(latest.rows.length!=1) {
            throw new Error("Unable to find Score");
        }
        return new Student(latest.rows[0])
    }


}

module.exports = Student