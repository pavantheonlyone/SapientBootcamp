package com.ps.web;

import java.io.IOException;
import java.util.Arrays;


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

/**
 * Servlet implementation class AddNewProductServlet
 */
@WebServlet("/add-new-product")
public class AddNewProductServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		try {
			// Responsibilities of a controller servlet
			// 1. Read the input from the request (if any)
			String input = request.getParameter("product_name");
			String product_name = new String(input);
			input = request.getParameter("quantity_per_unit");
			String quantity_per_unit = new String(input);
			input = request.getParameter("unit_price");
			Double unit_price = new Double(input);
			input = request.getParameter("units_in_stock");
			Integer units_in_stock = new Integer(input);
			input = request.getParameter("units_on_order");
			Integer units_on_order = new Integer(input);
			input = request.getParameter("reorder_level");
			Integer reorder_level = new Integer(input);
			input = request.getParameter("discontinued");
			Boolean discontinued = new Boolean(input);
			
			Product p = new Product();
			p.setProductName(product_name);
			p.setQuantityPerUnit(quantity_per_unit);
			p.setUnitPrice(unit_price);
			p.setUnitsInStock(units_in_stock);
			p.setUnitsOnOrder(units_on_order);
			p.setReorderLevel(reorder_level);
			p.setDiscontinued(discontinued);
			
			// 2. Get the model data from service/dao
			ProductDao dao = DaoFactory.getProductDao("hibernate");
			Integer id = dao.addNewProduct(p);
			
			
			// 3. Store the model data in a place (scope) accessible to the view
			// There are 3 scopes for servlet - request, session, application
			request.setAttribute("products", Arrays.asList(dao.getProduct(id)));
			request.setAttribute("title", "Details of New Product Added");
			
			// 4. forward the request/response to the view (JSP)
			String viewName = "/WEB-INF/pages/display-products.jsp";
			RequestDispatcher rd = request.getRequestDispatcher(viewName);
			rd.forward(request, response);
		} catch (DaoException | NumberFormatException e) {
			// report the error to the user in a user-friendly manner
			throw new ServletException(e);
		}
		
	}

}
