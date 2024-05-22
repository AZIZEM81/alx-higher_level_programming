--16-no_link.sql
16-no_link.sql
SELECT score, name
FROM second_table
HAVING name IS NOT NULL
ORDER BY score DESC;
