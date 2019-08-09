-- select <column-list> 
-- [from <table-list> 
-- 	[where <condition-list>]
-- 	[group by <column> 
-- 		[having <conditions>]
--	]
-- ]
-- [order by <columns> [asc|desc]]


/////////// 


select * from employees;  -- * means all columns
-- select with where condition      --> selection
-- select few/specific columns      --> projections
-- select data from 1/more tables   --> join operations

select * from employees where salary>=3000;
select * from employees where salary<=000;
select * from employees where salary between 25000 and 35000;

select name, email from employees
