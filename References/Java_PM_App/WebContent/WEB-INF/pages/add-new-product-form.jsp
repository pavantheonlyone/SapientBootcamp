<%@ include file="header.jsp" %>

<form method="POST" action="./add-new-product">
	
	<div class="form-group row">
		<label class="col-md-4">Product Name</label>
		<div class="col-md-8">
			<input type="text" class="form-control" name="product_name">
		</div>
	</div>
	
	<div class="form-group row">
		<label class="col-md-4">Quantity Per Unit</label>
		<div class="col-md-8">
			<input type="text" class="form-control" name="quantity_per_unit">
		</div>
	</div>
	
	<div class="form-group row">
		<label class="col-md-4">Unit Price</label>
		<div class="col-md-8">
			<input type="text" class="form-control" name="unit_price">
		</div>
	</div>
	
	<div class="form-group row">
		<label class="col-md-4">Units In Stock</label>
		<div class="col-md-8">
			<input type="text" class="form-control" name="units_in_stock">
		</div>
	</div>
	
	<div class="form-group row">
		<label class="col-md-4">Units On Order</label>
		<div class="col-md-8">
			<input type="text" class="form-control" name="units_on_order">
		</div>
	</div>
	
	<div class="form-group row">
		<label class="col-md-4">ReOrder Level</label>
		<div class="col-md-8">
			<input type="text" class="form-control" name="reorder_level">
		</div>
	</div>
	
	<div class="form-group row">
		<label class="col-md-4">Discontinued ?</label>
		<div class="col-md-8">
			<input type="text" class="form-control" name="discontinued">
		</div>
	</div>
	
	
	<div class="form-group row">
		<label class="col-md-4"></label>
		<div class="col-md-8">
			<button class="btn btn-primary">Add Product</button>
		</div>
	</div>

</form>

<%@ include file="footer.txt" %>