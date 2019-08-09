package com.ps.web;

import java.io.IOException;
import java.util.Collection;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ps.dao.DaoException;
import com.ps.dao.DaoFactory;
import com.ps.dao.ProductDao;
import com.ps.entity.Product;

@WebServlet("/products-not-in-stock")
public class GetProductNotInStockServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	  
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	
		try {
			ProductDao dao = DaoFactory.getProductDao("hibernate");
			Collection<Product> list = dao.getProductsNotInStock();
			
			request.setAttribute("products", list);
			request.setAttribute("title", "List of products not in stock");
			
			String viewName = "/WEB-INF/pages/display-products.jsp";
			RequestDispatcher rd = request.getRequestDispatcher(viewName);
			rd.forward(request, response);
		} catch (DaoException e) {
			throw new ServletException(e);
		}
	}
}
