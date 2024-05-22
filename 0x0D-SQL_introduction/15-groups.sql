--15-gro15-groups.sql
SELECT score, COUNT(1) AS number FROM second_table
GROUP BY score
ORDER BY number DESC;
