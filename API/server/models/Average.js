const db = require('../db/connect')

class Average {
    constructor({ topic, tp, times_completed , EXP}) {
        this.topic=topic
        this.tp=tp
        this.times_completed=times_completed
        this.EXP = EXP
    }
    static async getAll() {
        const student_table = await db.query('SELECT * FROM student;')
        if (student_table.rows.length === 0) {
            throw new Error('No missions completed')
        }
        let response = await db.query('SELECT topic, avg(topic_percent) as tp, count(*) as times_completed, avg(topic_percent) * count(*) as EXP FROM student GROUP BY topic');
        console.log(response.rows[0]);
        return response.rows.map(c => new Average(c))
    }
}

module.exports = Average