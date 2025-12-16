const db = require('../db/connect')

class Question {
    constructor({ question_id, question_intro, question, option_a, option_b, option_c, option_d, topic, correct_option }) {
        this.question_id = question_id
        this.question_intro = question_intro
        this.question = question
        this.option_a = option_a
        this.option_b = option_b
        this.option_c = option_c
        this.option_d = option_d
        this.topic = topic
        this.correct_option = correct_option
    }

    static async getQuestionById(question_id) {

        const response = await db.query('SELECT question_id, question_intro, question, option_a, option_b, option_c, option_d FROM question WHERE question_id = $1;', [question_id]);
        if (response.rows.length != 1) {
            throw new Error('Unable to find question number: ' + question_id)
        }
        return new Question(response.rows[0])
    }
}
module.exports = Question;