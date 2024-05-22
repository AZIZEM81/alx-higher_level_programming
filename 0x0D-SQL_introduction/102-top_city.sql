-- 102-top_city.sql
SELECT c.city, AVG(t.value) AS avg_temp
FROM temperatures t
JOIN cities c ON t.city_id = c.city_id
WHERE t.month BETWEEN 7 AND 8
GROUP BY c.city
ORDER BY avg_temp DESC
LIMIT 3;
