-- 51. Write a query to display the jobs/designations available in the employees table.
SELECT distinct jobs.job_title from employees 
join jobs on 
jobs.job_id in (SELECT distinct job_id from employees);

-- 52. Write a query to display the name (first_name, last_name), salary and PF (15% of salary) of all employees.
SELECT firstname, lastname, salary, salary*.15 PF from employees;

-- 53. Write a query to select all record from employees where last name in 'BLAKE', 'SCOTT', 'KING' and 'FORD'.
SELECT * 
from EMPLOYEES 
where LASTNAME  in ( 'BLAKE', 'SCOTT', 'King', 'FORD');

-- 54. Write a query to list the number of jobs available in the employees table.
SELECT COUNT(distinct job_id) from employees;

-- 55. Write a query to get the total salaries payable to employees.
SELECT SUM(salary) from employees;

-- 56. Write a query to get the minimum salary from employees table.
SELECT MIN(salary) from employees;

-- 57. Write a query to get the maximum salary of an employee working as a Programmer.
SELECT MAX(employees.salary) from employees where job_id = (SELECT job_id from jobs where job_title = 'Programmer');

--58. Write a query to get the average salary and number of employees working the department 90.
SELECT AVG(salary), count(salary) from employees where department_id=90;

-- 59. Write a query to get the highest, lowest, sum, and average salary of all employees.
SELECT  MAX(salary),MIN(salary),SUM(salary),AVG(salary) from employees;

-- 60. Write a query to get the number of employees with the same job.
SELECT job_id, COUNT(*) from employees group by job_id;

-- 61. Write a query to get the difference between the highest and lowest salaries.
SELECT MAX(salary)-MIN(salary) from employees;

-- 62. Write a query to find the manager ID and the salary of the lowest-paid employee for that manager.
SELECT manager_id,min(salary),count(*) from employees group by manager_id;

-- 63. Write a query to get the department ID and the total salary payable in each department.
SELECT department_id,sum(salary) from employees group by department_id;

-- 64. Write a query to get the average salary for each job ID excluding programmer.
SELECT AVG(salary),job_id from employees 
where job_id 
NOT IN (SELECT job_id from jobs where job_title = 'Programmer') group by job_id;

-- 65. Write a query to get the total salary, maximum, minimum, average salary of employees (job ID wise), for department ID 90 only.
select job_id,SUM(salary),MAX(salary),MIN(salary),AVG(salary) from employees where department_id=90 group by job_id
