-- create a table
CREATE TABLE USER (
  id INTEGER PRIMARY KEY,
  UserName TEXT NOT NULL,
  Parent INTEGER NOT NULL
);

-- insert some values
INSERT INTO USER VALUES (1, 'Ali', 2);
INSERT INTO USER VALUES (2, 'Budi', 0);
INSERT INTO USER VALUES (3, 'Cecep', 1);

-- create a table
CREATE TABLE userParent (
  id INTEGER PRIMARY KEY,
  UserName TEXT NOT NULL,
  ParentUserName INTEGER
);
INSERT INTO userParent (id, UserName, ParentUserName) 
VALUES (1, 'Ali', (CASE WHEN (SELECT Parent FROM USER WHERE USER.UserName='Ali') = 0  THEN "NULL" ELSE (SELECT UserName FROM USER WHERE USER.id=(SELECT Parent FROM USER WHERE USER.UserName='Ali')) END ));


INSERT INTO userParent (id, UserName, ParentUserName) 
VALUES (2, 'Budi', (CASE WHEN (SELECT Parent FROM USER WHERE USER.UserName='Budi') = 0  THEN "NULL" ELSE (SELECT UserName FROM USER WHERE USER.id=(SELECT Parent FROM USER WHERE USER.UserName='Budi')) END ));

INSERT INTO userParent (id, UserName, ParentUserName) 
VALUES (3, 'Cecep', (CASE WHEN (SELECT Parent FROM USER WHERE USER.UserName='Cecep') = 0  THEN "NULL" ELSE (SELECT UserName FROM USER WHERE USER.id=(SELECT Parent FROM USER WHERE USER.UserName='Cecep')) END ));

SELECT * FROM userParent;