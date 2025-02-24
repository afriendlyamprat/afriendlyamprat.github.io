// Common page display

async function findOverlap() {
	let categoryA = document.getElementById("categoryA").value.trim()
	let categoryB = document.getElementById("categoryB").value.trim()
	let categoryAName = categoryA
	let categoryBName = categoryB
	
	// Error checking
	if (categoryA == "") {
		document.getElementById("articleSourceCode").innerHTML = "Error: Category A was not provided"
		return
	}
	if (categoryB == "") {
		document.getElementById("articleSourceCode").innerHTML = "Error: Category B was not provided"
		return
	}
	
	document.getElementById("articleSourceCode").innerHTML = "Fetching category contents from Pikmin Fanon! (This may take a while with longer categories)"
	
	await fetchCategory(categoryA).then(function(result){
		categoryA = result
	})
	if (categoryA.length == 0) {
		document.getElementById("articleSourceCode").innerHTML = `Category:${categoryAName} was not found!`
		return
	}
	await fetchCategory(categoryB).then(function(result){
		categoryB = result
	})
	if (categoryB.length == 0) {
		document.getElementById("articleSourceCode").innerHTML = `Category:${categoryBName} was not found!`
		return
	}
	
	// Testing / debugging
	//console.log(categoryA)
	//console.log(categoryB)
	
	let overlap = categoryA.filter(value => categoryB.includes(value));
	
	if (overlap.length == 0) {		
		document.getElementById("articleSourceCode").innerHTML = `There are no articles in both Category:${categoryAName} and Category:${categoryBName}.<br><br>=== Details: ===<br>${categoryA.length} total articles in Category:${categoryAName}<br>${categoryB.length} total articles in Category:${categoryBName}`
	}
	else {
		document.getElementById("articleSourceCode").innerHTML = `${overlap.length} articles were found that are in both Category:${categoryAName} and Category:${categoryBName}!<br><br>=== Details: ===<br>${categoryA.length} total articles in Category:${categoryAName}<br>${categoryB.length} total articles in Category:${categoryBName}<br><br>=== Found articles: ===<br>${overlap.join("<br>")}`		
	}
	
}

async function fetchCategory(name,cmcontinue="") {
	// Fetch Pikmin Fanon category by name (name param must have no "Category:" prefix)
	let url = `https://pikminfanon.com/w/api.php?action=query&list=categorymembers&cmtitle=Category:${name}&cmlimit=100&cmcontinue=${cmcontinue}&format=json&origin=*`
		
	// Call `fetch()`, passing in the URL.	
	await fetch(url)
		// fetch() returns a promise. When we have received a response from the server,
		// the promise's `then()` handler is called with the response.
		.then((response) => {
		// Our handler throws an error if the request did not succeed.
		if (!response.ok) {
		  throw new Error(`HTTP error: ${response.status}`);
		}
		// Otherwise (if the response succeeded), our handler fetches the response
		// as text by calling response.text(), and immediately returns the promise
		// returned by `response.text()`.
		return response.text();
		})
		// When response.text() has succeeded, the `then()` handler is called with the text
		.then((text) => {
		json = JSON.parse(text)
		//console.log(json)
		})
		// Catch any errors that might happen, and display a message to output.
		.catch((error) => {
		console.log(`Could not fetch category: ${error}`);
		});
	
	let category = []
	if (json.query.categorymembers) {
		for (const member of json.query.categorymembers) {
		  let articleName = member.title
		  // Exclude subcategories
		  if (articleName.substring(0, 9) != "Category:") {
			  category.push(articleName)
		  }
		}
	}	
	if (json["continue"]) {
		let cmcontinue = json["continue"].cmcontinue
		category = category.concat(await fetchCategory(name,cmcontinue).then(function(result){
			return result
		}))
	}
	return category
}