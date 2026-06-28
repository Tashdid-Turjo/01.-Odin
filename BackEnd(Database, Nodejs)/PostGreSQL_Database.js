// PostGreSQL -> to organize and capture large amounts of data, typically by inputting, storing, retrieving and managing the information. This course will focus on relational databases.

// SQL -> Structured Query Language
//     -> SQL likes semicolons at the end of lines and using single quotes (‘) instead of double quotes(“).



//!! Basics of SQL:
// create table, insert data, query data[using SELECT], aggregate data[SUM(), AVG(), COUNT(), MAX(), MIN()]



// !! Intermediate of SQL:
// update data, delete data, combine data -> across tables



// !! Keywords:
// primary key, 
// foreign key, 
// schema -> setup information for your database stored in a special file called- Schema and this is updated whenever you make changes to the structure of your database,
//        -> Think of the schema as saying, “Here’s our database, and it’s got a couple of tables. The first table is ‘users’, and it’s got columns for ‘ID’ (which is an integer), ‘name’ (which is a bunch of characters), ‘email’ (which is a bunch of characters) …”



// !! When you want unique values of a column:
// A close cousin of SELECT, for when you only want unique values of a column, is SELECT DISTINCT. Say you want a list of all the different 
// names of your users without any duplicates… try -> SELECT DISTINCT users.name FROM users.



// !! Inner, Left, Right, Outer JOIN:
// 🔄 The Golden Rule for both LEFT and RIGHT Joins:
// Whichever table is the "outer" boss (Left for LEFT JOIN, Right for RIGHT JOIN), its data will safely stay intact. If the opposite table has multiple matching pieces, the boss table's data simply duplicates as many times as needed to line up with them side-by-side.




// !! Where vs Having:
// WHERE filters individual rows before they are grouped.
// HAVING filters the summary piles after they are grouped.



