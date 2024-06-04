<!--
	DEVNOTES:
	The responsive nature of the table for mobile requires some data attribute trickery.
	For example, the data-th attribute is used to provide a label for the data in the table on 
	mobile via CSS (the CSS adds a ::before psuedo element and then the content is set to the value of 
	the data-th attribute).
	We can't rely on a content author to manually add this attribute to each table cell, so we need to have a function
	that creates an array of the values of each TH element and then assigns them to the corresponding TD element.
	This will cause an issue where the first TH element is empty, but the first TD of each TR has a value.
	We should train content authors to not create a table where the first TH element is empty.
	Also the row with tr.mid-table-headline will also need to be done by a content author that has HTML experience.
-->

<table>
	<thead>
		<tr>
			<th>Pricing and deductible options</th>
			<th>Typical ERIE auto policy</th>
			<th>Typical competitor policy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td data-th="Pricing and deductible options">ERIE Rate Lock</td>
			<td data-th="Typical ERIE auto policy">Yes. Learn more about our <a href="/">ERIE Rate Lock</a> option.</td>
			<td data-th="Typical competitor policy">No</td>	
		</tr>
		<tr>
			<td data-th="Pricing and deductible options">First Accident Forgiveness <a href="/"><sup>1</sup></a></td>
			<td data-th="Typical ERIE auto policy">Yes, no surcharge the first time you're at fault in an accident after you have been a customer for three years.</td>
			<td data-th="Typical competitor policy">Cost extra.</td>
		</tr>
		<tr>
			<td data-th="Pricing and deductible options">Diminishing Deductible</td>
			<td data-th="Typical ERIE auto policy">Yes, reduced by $100 for each consecutive claims-free policy year, up to a maximum of $500. <a href="/"><sup>2</sup></a></td>
			<td data-th="Typical competitor policy">Sometimes available and costs extra.</td>
		</tr>
		<tr class="mid-table-headline">
			<td colspan="3">Coverage Options</td>
		</tr><!-- /mid-table-headline-->
		<tr>
			<td>Transportation Expense/Rental Car Coverage</td>
			<td>Yes, with comprehensive coverage. Additional days of coverage are available after settlement. Add it to collision coverage and pick from six classes of rental car options.  Read more about rental car expense coverage.</td>
			<td>A daily dollar limit and the payment ends upon the settlement.</td>
		</tr>
		<tr>
			<td>Roadside Service</td>
			<td>Yes, reasonable towing and required labor costs at the site where your car breaks down.5 Learn more about emergency road service coverage.</td>
			<td>Typically, only up to a certain dollar amount.</td>
		</tr>
		<tr>
			<td>New Car Protection</td>
			<td>Yes, If your new vehicle (up to 24 months old) is a total loss after an accident, it will be replaced with a new vehicle of the latest model year.6 Read more about new and used car replacement.</td>
			<td>Limited. It may only be available for the first year after the vehicle is purchased. With ERIE, it’s up to two years.</td>
		</tr>
	</tbody>
</table>