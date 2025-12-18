const db = require("../db/connect");

class Current {
  constructor({
    question_id,
    question_intro,
    question,
    student_option,
    correct_option,
    topic,
  }) {
    this.question_id = question_id;
    this.question_intro = question_intro;
    this.question = question;
    this.student_option = student_option;
    this.correct_option = correct_option;
    this.topic = topic;
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM current;");
    if (response.rows.length === 0) {
      throw new Error("No questions completed");
    }
    return response.rows.map((c) => new Current(c));
  }

  static async clearTable() {
    await db.query("TRUNCATE TABLE current;");
    await db.query("DBCC CHECKIDENT ('current', RESEED, 0);");
  }

  static async getOneQuetsionById(question_id) {
    const response = await db.query(
      "SELECT * FROM current WHERE question_id=$1;",
      [question_id]
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to find question");
    }
    return new Current(response.rows[0]);
  }

  static async addQuestionToCurrent(question_id) {
    const current_mission = await db.query("SELECT * FROM current;");
    if (current_mission.rows.length >= 0) {
      let response = await db.query(
        "INSERT INTO current (question_intro, question,correct_option,topic) SELECT question_intro, question,correct_option, topic FROM question WHERE question_id = $1;",
        [question_id]
      );
    } else {
      throw new Error("Current Mission full");
    }
  }
  static async create(data) {
    const { question_intro, question, student_option, correct_option, topic } =
      data;
    const existing_question = await db.query(
      "SELECT question FROM current WHERE LOWER(question_intro) = LOWER($1);",
      [question_intro]
    );

    if (existing_question.rows.length === 0) {
      let response = await db.query(
        "INSERT INTO current (question_intro, question, student_option, correct_option,topic) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
        [question_intro, question, student_option, correct_option, topic]
      );
      return new Current(response.rows[0]);
    } else {
      throw new Error("This question has already been added");
    }
  }
}
module.exports = Current;
