package com.ps.util;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.ps.entity.Category;
import com.ps.entity.Product;
import com.ps.entity.Supplier;

public final class HibernateUtil {
	
	private static SessionFactory factory;
	
	private HibernateUtil() {
	}
	
	public static SessionFactory getSessionFactory() {
		
		// implements singleton design pattern
		// For second call returns factory without building new session factory
		if(factory != null) {
			return factory;
		}
		Configuration cfg = new Configuration();  // empty configuration object 
		cfg.configure();	// reads and initializes itself from hibernate.cfg.xml
		cfg.addAnnotatedClass(Product.class); //register your entity classes with hibernate
		cfg.addAnnotatedClass(Category.class);
		cfg.addAnnotatedClass(Supplier.class);// register your entity classes with hibernate 
		factory = cfg.buildSessionFactory();
		return factory;
	}
}
