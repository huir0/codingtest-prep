-- 코드를 입력하세요
SELECT BOOK_ID, DATE_FORMAT(PUBLISHED_DATE, '%Y-%m-%d') as date_only FROM BOOK WHERE CATEGORY like '인문' and PUBLISHED_DATE LIKE '%2021%' ORDER BY PUBLISHED_DATE ASC;
# SELECT * FROM BOOK;