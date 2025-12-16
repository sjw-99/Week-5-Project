DROP TABLE IF Exists question;

CREATE TABLE question (
    question_id INT GENERATED ALWAYS AS IDENTITY,
    question_intro VARCHAR(100) NOT NULL,
    question VARCHAR(100) NOT NULL,
    option_a VARCHAR(100) NOT NULL,
    option_b VARCHAR(100) NOT NULL,
    option_c VARCHAR(255),
    option_d VARCHAR(255),
    topic VARCHAR(100),
    correct_option VARCHAR(100) NOT NULL,
    PRIMARY KEY (question_id)
);

INSERT INTO question (question_intro, question, option_a, option_b, option_c, option_d, topic, correct_option)
VALUES
('In the early 20th century, European powers were forming alliances that divided the continent.', 'What were the two main alliance systems before World War I began?', 'Triple Entente and Triple Alliance', 'League of Nations and Axis Powers', 'NATO and Warsaw Pact', 'Central Powers and Allied Nations','WW1' , 'Triple Entente and Triple Alliance'),
('Nationalism and empire-building increased tensions among European powers.', 'Which event is often seen as the immediate cause of World War I?', 'The German invasion of Belgium', 'The assassination of Archduke Franz Ferdinand', 'The British naval blockade', 'The signing of the Treaty of Versailles','WW1', 'The assassination of Archduke Franz Ferdinand'),
('After the assassination in Sarajevo, alliances were triggered into war.', 'Which countries made up the Triple Entente?', 'Germany, Austria-Hungary, and Italy', 'Britain, France, and Russia', 'Italy, Japan, and the USA', 'Austria-Hungary, Bulgaria, and Turkey','WW1', 'Britain, France, and Russia'),
('New technologies changed the nature of warfare.', 'Which new weapon was first used on a large scale during World War I?', 'Atomic bomb', 'Tanks', 'Longbows', 'Submarines' ,'WW1', 'Tanks'),
('Trench warfare became a horrific hallmark of the Western Front.', 'Why did trench warfare lead to a stalemate?', 'Both sides had strong defensive positions and similar technology', 'Armies refused to fight during winter', 'Commanders avoided attacking on Sundays', 'The trenches were too far apart for fighting' ,'WW1', 'Both sides had strong defensive positions and similar technology'),
('World War I spread across continents due to imperial involvement.', 'Why was World War I considered a "world" war?', 'It involved colonies and nations from across the world', 'It was fought only in Europe', 'It lasted more than ten years', 'All countries fought on the same side' ,'WW1', 'It involved colonies and nations from across the world'),
('The war had a major impact on life at home.', 'What role did women increasingly take on during the war?', 'Serving as soldiers in the front lines', 'Working in factories and nursing', 'Becoming government ministers', 'Fighting for foreign armies' ,'WW1', 'Working in factories and nursing'),
('The war ended with an armistice in late 1918.', 'On which date was the Armistice that ended World War I signed?', '11 November 1918', '1 July 1916', '28 June 1919', '4 August 1914' ,'WW1', '11 November 1918'),
('After the war, Allied leaders met in Paris to plan peace.', 'What was the main purpose of the Treaty of Versailles?', 'To create alliances for future wars', 'To punish Germany and prevent future conflict', 'To divide Africa between European nations', 'To rebuild the Ottoman Empire' ,'WW1', 'To punish Germany and prevent future conflict'),
('The post-war peace settlement reshaped Europe.', 'Which organization was founded to help maintain peace after the war?', 'United Nations', 'European Union', 'League of Nations', 'Commonwealth of Nations' ,'WW1', 'League of Nations');

DROP TABLE IF Exists current;
CREATE TABLE current (
    question_id INT GENERATED ALWAYS AS IDENTITY,
    question_intro VARCHAR(100) NOT NULL,
    question VARCHAR(100) NOT NULL,
    student_option VARCHAR(100),
    correct_option VARCHAR(100) NOT NULL,
    topic VARCHAR(100) NOT NULL
);


DROP TABLE IF Exists student;
CREATE TABLE student (
    topic_id INT GENERATED ALWAYS AS IDENTITY,
    topic VARCHAR(100) NOT NULL,
    topic_percent FLOAT,
    times_completed INT,
    EXP FLOAT
);


DROP TABLE IF Exists stats;
CREATE TABLE stats (
    student_id INT GENERATED ALWAYS AS IDENTITY,
    topic VARCHAR(100) NOT NULL,
    topic_percent FLOAT,
    times_completed INT
);
