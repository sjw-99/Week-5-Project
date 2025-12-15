CREATE TABLE question (
    question_id INT GENERATED ALWAYS AS IDENTITY,
    question_intro VARCHAR(100) NOT NULL,
    question VARCHAR(100) NOT NULL,
    option_a VARCHAR(100) NOT NULL,
    option_b VARCHAR(100) NOT NULL,
    option_c VARCHAR(255),
    option_d VARCHAR(255),
    correct_option CHAR(1) NOT NULL,
    PRIMARY KEY (question_id)
);

INSERT INTO question (question_id, question_intro, question, option_a, option_b, option_c, option_d, correct_option)
VALUES
(1, 'In the early 20th century, European powers were forming alliances that divided the continent.', 'What were the two main alliance systems before World War I began?', 'Triple Entente and Triple Alliance', 'League of Nations and Axis Powers', 'NATO and Warsaw Pact', 'Central Powers and Allied Nations', 'Option A'),
(2, 'Nationalism and empire-building increased tensions among European powers.', 'Which event is often seen as the immediate cause of World War I?', 'Germany’s invasion of Belgium', 'The assassination of Archduke Franz Ferdinand', 'Britain’s naval blockade', 'The signing of the Treaty of Versailles', 'Option B'),
(3, 'After the assassination in Sarajevo, alliances were triggered into war.', 'Which countries made up the Triple Entente?', 'Germany, Austria-Hungary, and Italy', 'Britain, France, and Russia', 'Italy, Japan, and the USA', 'Austria-Hungary, Bulgaria, and Turkey', 'Option B'),
(4, 'New technologies changed the nature of warfare.', 'Which new weapon was first used on a large scale during World War I?', 'Atomic bomb', 'Tanks', 'Longbows', 'Submarines', 'Option B'),
(5, 'Trench warfare became a horrific hallmark of the Western Front.', 'Why did trench warfare lead to a stalemate?', 'Both sides had strong defensive positions and similar technology', 'Armies refused to fight during winter', 'Commanders avoided attacking on Sundays', 'The trenches were too far apart for fighting', 'Option A'),
(6, 'World War I spread across continents due to imperial involvement.', 'Why was World War I considered a ‘world’ war?', 'It involved colonies and nations from across the world', 'It was fought only in Europe', 'It lasted more than ten years', 'All countries fought on the same side', 'Option A'),
(7, 'The war had a major impact on life at home.', 'What role did women increasingly take on during the war?', 'Serving as soldiers in the front lines', 'Working in factories and nursing', 'Becoming government ministers', 'Fighting for foreign armies', 'Option B'),
(8, 'The war ended with an armistice in late 1918.', 'On which date was the Armistice that ended World War I signed?', '11 November 1918', '1 July 1916', '28 June 1919', '4 August 1914', 'Option A'),
(9, 'After the war, Allied leaders met in Paris to plan peace.', 'What was the main purpose of the Treaty of Versailles?', 'To create alliances for future wars', 'To punish Germany and prevent future conflict', 'To divide Africa between European nations', 'To rebuild the Ottoman Empire', 'Option B'),
(10, 'The post-war peace settlement reshaped Europe.', 'Which organization was founded to help maintain peace after the war?', 'United Nations', 'European Union', 'League of Nations', 'Commonwealth of Nations', 'Option C');