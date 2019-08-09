package com.ps.cfg;

import javax.sql.DataSource;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import com.ps.dao.JdbcProductDao;
import com.ps.dao.ProductDao;

@Configuration
@PropertySource({"classpath:jdbc-info.properties"})
@ComponentScan(basePackages = {"com.ps.dao"})
// ComponentScan --> scans in the given package and sub-package folders
// for classes that are annotated as @Component/@Repository/@Controller/@Service/@Configuration
// and instantiates using the no-args constructor and loads then into the spring container 
// as beans.
public class AppConfig3 {

	@Value("${jdbc.driver_class_name}")
	private String driver;
	
	@Value("${jdbc.url}")
	private String url;
	
	@Value("${jdbc.username}")
	private String user;
	
	@Value("${jdbc.password}")
	private String password;
	
	
	// bean representing a connection pool
	@Bean
	public DataSource dataSource() {
		BasicDataSource bds =  new BasicDataSource();
		bds.setDriverClassName(driver);
		bds.setUrl(url);
		bds.setUsername(user);
		bds.setPassword(password);
		bds.setInitialSize(5);
		bds.setMaxTotal(100);
		bds.setMaxIdle(10);
		bds.setMaxWaitMillis(50);
		return bds;
		
	}
	
	public ProductDao dao(DataSource dbcp) {  // dependency injection
		JdbcProductDao jdbcDao = new JdbcProductDao();
//		jdbcDao.setDataSource(dataSource());  // manual wiring
		jdbcDao.setDataSource(dbcp);
		return jdbcDao;
	}
}
