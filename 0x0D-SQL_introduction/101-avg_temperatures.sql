-- 101-avg_temperatures.sql
SELECT c.city, AVG(t.value) AS avg_temp
FROM temperatures t
JOIN cities c ON t.city_id = c.city_id
GROUP BY c.city
ORDER BY avg_temp DESC;
