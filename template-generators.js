parameters = {
	pageName: null,
	isPlant: null,
	family: null,
	hasThe: null,
	customSynopsis: null,
	doFanonWriting: null,
	doFanonGames: null,
	doUserVersions: null,
	fanonProjectName: null,
	author: null,
	customFanonGameBanner: null,
	customname: null,
	additionalParams: null,
	doInfobox: null,
	doCreatureNotes: null,
	doNavboxesFooter: null,
	enemyCategories: [],
	doPlotSection: null,
	doOverviewSection: null,
	doCutscenesSection: null,
	doContentsSection: null,
	doDataFilesSection: null,
	doGallerySection: null,
	navboxName: null,
	caves: null,
	keySections: null,
	pikminDiscovered: null,
	doHowToReachSection: null,
	caveArea: null,
	levelTerm: null,
	sublevelNum: null,
	sublevelImages: null,
	sublevelMusic: null,
	isPlayable: null,
	isDLC: null,
}

let initialized = false
function updateParams(type) {
	if (!initialized) {
		// Set these default properties when first running.
		// Afterwards, these are not modified so you can change them in the console for more advanced setting modifications.
		initialized = true
		if(type == 'enemy') {
			parameters.hasThe = true
			parameters.customSynopsis = false
			parameters.doInfobox = true
		}
		if(type == 'pikmin') {
			parameters.hasThe = true
			parameters.customSynopsis = false
			parameters.doInfobox = true
		}
		if(type == 'game') {
			parameters.doNavboxesFooter = true
		}
		if(type == 'area') {
			
		}
	}
	// Individual article type parameters from user input
	if (type == 'enemy') {
		parameters.pageName = document.getElementById("pageName").value.trim()
		parameters.isPlant = (document.getElementById("isPlant").value == "true")
		parameters.family = document.getElementById("family").value.trim()
		parameters.doFanonWriting = (document.getElementById("fanonMediaType").value == "doFanonWriting")
		parameters.doFanonGames = (document.getElementById("fanonMediaType").value == "doFanonGames")
		parameters.doUserVersions = (document.getElementById("fanonMediaType").value == "doUserVersions")
		parameters.fanonProjectName = document.getElementById("fanonProjectName").value.trim()
		parameters.author = document.getElementById("author").value.trim()
		parameters.customFanonGameBanner = document.getElementById("customFanonGameBanner").value.trim()
		parameters.customname = document.getElementById("customname").value.trim()
		parameters.additionalParams = parseInt(document.getElementById("additionalParams").value.trim())
		parameters.doCreatureNotes = (document.getElementById("doCreatureNotes").value == "true")
		parameters.doNavboxesFooter = (document.getElementById("doNavboxesFooter").value == "true")
			
		parameters.enemyCategories = []
		if (!parameters.isPlant) {
			for (let i = 1; i <= 35; i++) {
				// Get checked categories
				if (!document.getElementById("enemyCategories"+i).checked) continue
				parameters.enemyCategories.push(document.getElementById("enemyCategories"+i).value)
			}
		}
	}
	if (type == 'pikmin') {
		parameters.pageName = document.getElementById("pageName").value.trim()
		parameters.doFanonWriting = (document.getElementById("fanonMediaType").value == "doFanonWriting")
		parameters.doFanonGames = (document.getElementById("fanonMediaType").value == "doFanonGames")
		parameters.doUserVersions = (document.getElementById("fanonMediaType").value == "doUserVersions")
		parameters.fanonProjectName = document.getElementById("fanonProjectName").value.trim()
		parameters.author = document.getElementById("author").value.trim()
		parameters.customFanonGameBanner = document.getElementById("customFanonGameBanner").value.trim()
		parameters.customname = document.getElementById("customname").value.trim()
		parameters.additionalParams = parseInt(document.getElementById("additionalParams").value.trim())
		parameters.doCreatureNotes = (document.getElementById("doCreatureNotes").value == "true")
		parameters.doNavboxesFooter = (document.getElementById("doNavboxesFooter").value == "true")
	}
	
	if (type == 'game') {
		parameters.isPlayable = (document.getElementById("isPlayable").value == "true")
		parameters.isDLC = (document.getElementById("isDLC").value == "true")
		parameters.pageName = document.getElementById("pageName").value.trim()
		parameters.author = document.getElementById("author").value.trim()
		parameters.customFanonGameBanner = document.getElementById("customFanonGameBanner").value.trim()
		parameters.additionalParams = parseInt(document.getElementById("additionalParams").value.trim())
	}
	
	if (type == 'area') {
		parameters.pageName = document.getElementById("pageName").value.trim()
		parameters.fanonProjectName = document.getElementById("fanonProjectName").value.trim()
		parameters.author = document.getElementById("author").value.trim()
		parameters.customFanonGameBanner = document.getElementById("customFanonGameBanner").value.trim()
		parameters.doPlotSection = (document.getElementById("doPlotSection").value == "true")
		parameters.doOverviewSection = (document.getElementById("doOverviewSection").value == "true")
		parameters.doCutscenesSection = (document.getElementById("doCutscenesSection").value == "true")
		parameters.doContentsSection = (document.getElementById("doContentsSection").value == "true")
		parameters.doDataFilesSection = (document.getElementById("doDataFilesSection").value == "true")
		parameters.doGallerySection = (document.getElementById("doGallerySection").value == "true")
		parameters.navboxName = document.getElementById("navboxName").value.trim()
		parameters.additionalParams = parseInt(document.getElementById("additionalParams").value.trim())
		parameters.caves = []
		let cave1 = document.getElementById("cave1").value.trim()
		let cave2 = document.getElementById("cave2").value.trim()
		let cave3 = document.getElementById("cave3").value.trim()
		let cave4 = document.getElementById("cave4").value.trim()
		if (cave1) parameters.caves.push(cave1)
		if (cave2) parameters.caves.push(cave2)
		if (cave3) parameters.caves.push(cave3)
		if (cave4) parameters.caves.push(cave4)
		parameters.keySections = []
		let ks1 = document.getElementById("ks1").value.trim()
		let ks2 = document.getElementById("ks2").value.trim()
		let ks3 = document.getElementById("ks3").value.trim()
		let ks4 = document.getElementById("ks4").value.trim()
		if (ks1) parameters.keySections.push(ks1)
		if (ks2) parameters.keySections.push(ks2)
		if (ks3) parameters.keySections.push(ks3)
		if (ks4) parameters.keySections.push(ks4)
		parameters.pikminDiscovered = []
		let pik1 = document.getElementById("pik1").value.trim()
		let pik2 = document.getElementById("pik2").value.trim()
		let pik3 = document.getElementById("pik3").value.trim()
		let pik4 = document.getElementById("pik4").value.trim()
		if (pik1) parameters.pikminDiscovered.push(pik1)
		if (pik2) parameters.pikminDiscovered.push(pik2)
		if (pik3) parameters.pikminDiscovered.push(pik3)
		if (pik4) parameters.pikminDiscovered.push(pik4)		
	}

	if (type == 'cave') {
		parameters.pageName = document.getElementById("pageName").value.trim()
		parameters.fanonProjectName = document.getElementById("fanonProjectName").value.trim()
		parameters.author = document.getElementById("author").value.trim()
		parameters.customFanonGameBanner = document.getElementById("customFanonGameBanner").value.trim()
		parameters.doHowToReachSection = (document.getElementById("doHowToReachSection").value == "true")
		parameters.navboxName = document.getElementById("navboxName").value.trim()
		parameters.additionalParams = parseInt(document.getElementById("additionalParams").value.trim())
		parameters.caveArea = document.getElementById("caveArea").value.trim()
		parameters.levelTerm = document.getElementById("levelTerm").value.trim()
		parameters.sublevelNum = parseInt(document.getElementById("sublevelNum").value.trim())
		parameters.sublevelImages = (document.getElementById("sublevelImages").value == "true")
		parameters.sublevelMusic = (document.getElementById("sublevelMusic").value == "true")
	}
	
}

function rewriteTemplate(type) {
	// type: type of article (game, pikmin, enemy, etc.)
	updateParams(type)

	document.getElementById("articleSourceCode").innerHTML = getArticleTemplate(type)
	
	// Update create href to link to create page with the given name parameter
	if (parameters.pageName) {
		document.title = "Creating "+(type=="pikmin"?"Pikmin":type)+" article "+parameters.pageName+"..."

		document.getElementById("createArticleLink").href = `https://pikminfanon.com/w/index.php?action=edit&title=${parameters.pageName}&create=Create+an+article`
		document.getElementById("createArticleLink").title = `https://pikminfanon.com/w/index.php?action=edit&title=${parameters.pageName}&create=Create+an+article`
	}
}

function getDisplayParam(paramName) {
	if (parameters.hasOwnProperty(paramName) && parameters[paramName]) return parameters[paramName]
	if (paramName == "pageName") return "<name>"
	if (paramName == "fanonProjectName") return "<fanon project name>"
	if (paramName == "author") return "<author name>"
	return `<${paramName}>`
}

function getArticleTemplate(type) {
	try {
		if (type == "enemy") {
			return getEnemyArticleTemplate()
		}
		if (type == "pikmin") {
			return getPikminArticleTemplate()
		}
		if (type == "game") {
			return getGameArticleTemplate()
		}
		if (type == "area") {
			return getAreaArticleTemplate()
		}
		if (type == "cave") {
			return getCaveArticleTemplate()
		}
		throw new Error("No defined template for \""+type+"\" article")
	}
	catch(err) {
		return "Error: "+err.message+". Please inform A Friendly Amprat about this message.<br>"+getOopsMessage()
	}
}

function getEnemyArticleTemplate() {
	// Create synopsis infobox
	let infobox = `{{infobox info
|${parameters["isPlant"] ? "plant=y" : "enemy=y"}${parameters["family"] ? "\n|family="+getDisplayParam("family")+"" : ""}
|noname=y
}}`

	// Create synopsis
	let family = parameters["family"]
	let synopsis = ""
	if (parameters["customSynopsis"]) {
		synopsis = parameters["customSynopsis"]
	}
	else {
		synopsis = `${parameters["hasThe"] ? "The " : ""}'''<subject>''' is a ${!parameters["isPlant"] ? "species of " : ""}[[<family> family|<family>]] that ...`
		if (!family) synopsis = `${parameters["hasThe"] ? "The " : ""}'''<subject>''' is a ${!parameters["isPlant"] ? (parameters["hasThe"] ? "creature" : "being") : "plant"} that ...`
	}
	// Text substitutions
	synopsis = synopsis.replaceAll("<subject>",getDisplayParam("pageName"))
	synopsis = synopsis.replaceAll("<enemy>",getDisplayParam("pageName"))
	synopsis = synopsis.replaceAll("<plant>",getDisplayParam("pageName"))
	synopsis = synopsis.replaceAll("<pageName>",getDisplayParam("pageName"))
	if(family) {
		synopsis = synopsis.replaceAll("[[<family> family|<family>]]",`[[${family} family|${family.toLowerCase()}]]`)
		synopsis = synopsis.replaceAll("<family>",family)
	}
	
	let ifgSectionStart = `{{in fanon games${parameters["hasThe"] ? "|the=y" : ""}}}`
	// Create fanon media sections
	
	let author = getDisplayParam("author")
	let projectName = getDisplayParam("fanonProjectName")
	let projectBanner = (parameters.customFanonGameBanner ? parameters.customFanonGameBanner : `media|${projectName}|${author}`)
	let customname = parameters.customname
	let additionalParams = parameters.additionalParams
	let doInfobox = parameters.doInfobox
	let infoboxEnemy = ``

	// Set up enemy infobox
	if(doInfobox) {
		infoboxEnemy = `{{infobox enemy${customname ? "\n|customname="+customname : ""}
		|image=
		|size=200px`+
		(additionalParams > 2 ? `\n|caption=` : ``)+`
		|icon=Enemy icon.png
		|name=${family ? "\n|family="+family : ""}`+
		(additionalParams > 0 ? `
		|areas=
		|underground=` : ``)+
		(additionalParams > 1 ? `
		|challenge=
		|battle=` : ``)+
		(additionalParams > 0 ? `
		|weight=
		|max_pikmin=
		|seeds=
		|value=` : ``)+
		(additionalParams > 2 ? `
		|sparklium=
		|drops=
		|health=
		|weakness=
		|resistance=` : ``)+`
		|attacks=
		}}`
		
		// Plant infobox
		if (parameters.isPlant) {
			infoboxEnemy = `{{infobox plant${customname ? "\n|customname="+customname : ""}
			|image=
			|size=200px`+
			(additionalParams > 2 ? `\n|caption=` : ``)+`
			|icon=Vegetation icon.png
			|name=${family ? "\n|family="+family : ""}`+
			(additionalParams > 0 ? `
			|areas=
			|underground=` : ``)+
			(additionalParams > 1 ? `
			|challenge=
			|battle=` : ``)+
			(additionalParams > 0 ? `
			|weight=
			|max_pikmin=
			|seeds=
			|value=` : ``)+
			(additionalParams > 2 ? `
			|sparklium=
			|health=` : ``)+`
			}}`
		}
	}

	let creatureNotes = parameters.doCreatureNotes ? `
===Notes===
{{notes|Olimar's notes| <Olimar's notes...> }}
{{notes|Louie's notes| <Louie's notes...> }}
` : ""
	
	let navboxesFooter = parameters.doNavboxesFooter ? `{{navboxes|
<navigation templates>
}}

` : ""
	
	let enemyCategoriesString = ""
	
	// Create categories based on given parameters
	if (parameters["enemyCategories"]) {		
		// Boss categorization is first, as stated in https://pikminfanon.com/wiki/Forum:Marching_Onward#Article_categories
		if (parameters["enemyCategories"].includes("final boss")) enemyCategoriesString += "[[Category:Final bosses]]\n"
		else if (parameters["enemyCategories"].includes("boss")) enemyCategoriesString += "[[Category:Bosses]]\n"

		if (parameters["enemyCategories"].includes("acid")) enemyCategoriesString += "[[Category:Acid enemies]]\n"
		if (parameters["enemyCategories"].includes("adhesive")) enemyCategoriesString += "[[Category:Adhesive enemies]]\n"
		if (parameters["enemyCategories"].includes("aura")) enemyCategoriesString += "[[Category:Aura enemies]]\n"
		if (parameters["enemyCategories"].includes("bubble")) enemyCategoriesString += "[[Category:Bubble enemies]]\n"
		if (parameters["enemyCategories"].includes("blunt force")) enemyCategoriesString += "[[Category:Blunt force enemies]]\n"
		if (parameters["enemyCategories"].includes("dark matter")) enemyCategoriesString += "[[Category:Dark matter enemies]]\n"
		if (parameters["enemyCategories"].includes("darkfreeze")) enemyCategoriesString += "[[Category:Darkfreeze enemies]]\n"
		if (parameters["enemyCategories"].includes("doom")) enemyCategoriesString += "[[Category:Doom enemies]]\n"
		if (parameters["enemyCategories"].includes("earth")) enemyCategoriesString += "[[Category:Earth enemies]]\n"
		if (parameters["enemyCategories"].includes("electric")) enemyCategoriesString += "[[Category:Electric enemies]]\n"
		if (parameters["enemyCategories"].includes("explosion")) enemyCategoriesString += "[[Category:Explosion enemies]]\n"
		if (parameters["enemyCategories"].includes("fire")) enemyCategoriesString += "[[Category:Fire enemies]]\n"
		if (parameters["enemyCategories"].includes("ice")) enemyCategoriesString += "[[Category:Ice enemies]]\n"
		if (parameters["enemyCategories"].includes("lava")) enemyCategoriesString += "[[Category:Lava enemies]]\n"
		if (parameters["enemyCategories"].includes("lubricant")) enemyCategoriesString += "[[Category:Lubricant enemies]]\n"
		if (parameters["enemyCategories"].includes("poison")) enemyCategoriesString += "[[Category:Poison enemies]]\n"
		if (parameters["enemyCategories"].includes("shadow")) enemyCategoriesString += "[[Category:Shadow enemies]]\n"
		if (parameters["enemyCategories"].includes("water")) enemyCategoriesString += "[[Category:Water enemies]]\n"
		if (parameters["enemyCategories"].includes("airborne")) enemyCategoriesString += "[[Category:Airborne enemies]]\n"
		if (parameters["enemyCategories"].includes("aquatic")) enemyCategoriesString += "[[Category:Aquatic enemies]]\n"
		if (parameters["enemyCategories"].includes("burrowing")) enemyCategoriesString += "[[Category:Burrowing enemies]]\n"
		if (parameters["enemyCategories"].includes("disguising")) enemyCategoriesString += "[[Category:Disguising enemies]]\n"
		if (parameters["enemyCategories"].includes("eating")) enemyCategoriesString += "[[Category:Eating enemies]]\n"
		if (parameters["enemyCategories"].includes("harmless")) enemyCategoriesString += "[[Category:Harmless enemies]]\n"
		if (parameters["enemyCategories"].includes("hiding")) enemyCategoriesString += "[[Category:Hiding enemies]]\n"
		if (parameters["enemyCategories"].includes("humanoid")) enemyCategoriesString += "[[Category:Humanoid enemies]]\n"
		if (parameters["enemyCategories"].includes("mechanical")) enemyCategoriesString += "[[Category:Mechanical enemies]]\n"
		if (parameters["enemyCategories"].includes("mutated")) enemyCategoriesString += "[[Category:Mutated enemies]]\n"
		if (parameters["enemyCategories"].includes("pikmin")) enemyCategoriesString += "[[Category:Pikmin enemies]]\n"
		if (parameters["enemyCategories"].includes("pikmin-altering")) enemyCategoriesString += "[[Category:Pikmin-altering enemies]]\n"
		if (parameters["enemyCategories"].includes("reviving")) enemyCategoriesString += "[[Category:Reviving enemies]]\n"
		if (parameters["enemyCategories"].includes("summoning")) enemyCategoriesString += "[[Category:Summoning enemies]]\n"
		if (parameters["enemyCategories"].includes("wandering")) enemyCategoriesString += "[[Category:Wandering enemies]]\n"
	}
	
	// Set up fanon games sections
	let description = `${parameters["hasThe"] ? "The " : ""} '''${customname ? customname : getDisplayParam("pageName")}''' is ...`

	let inFanonWriting = ""
	if (parameters["doFanonWriting"]) {
		inFanonWriting = `=In fanon writing=
		${ifgSectionStart}
==In ''${projectName}''==
{{${projectBanner}}}
${doInfobox ? infoboxEnemy+"\n" : ""}
${description}
${creatureNotes}{{clear}}
`		
	}
	let inFanonGames = ""
	if (parameters["doFanonGames"]) {
		inFanonGames = `=In fanon games=
		${ifgSectionStart}
==In ''${projectName}''==
{{${projectBanner}}}
${doInfobox ? infoboxEnemy+"\n" : ""}
${description}
${creatureNotes}{{clear}}
`
	}
	let userVersions = ""
	if (parameters["doUserVersions"]) {
		userVersions = `=User versions=
${ifgSectionStart}
==${author}'s version==
{{see|User:${author}}}
${doInfobox ? infoboxEnemy+"\n" : ""}
${description}
${creatureNotes}{{clear}}
`		
	}
	
	
	// Generate template
	let template = `
${infobox}
	
${synopsis}

__TOC__
{{clear}}

${inFanonWriting}${inFanonGames}${userVersions}
${navboxesFooter}${enemyCategoriesString}
`
	
	/* TODO potential additions:
	
	- Support for <gallery> </gallery> tag
	
	*/
	template = ASCIItoHTML(template.trim())
	return template
}

function getPikminArticleTemplate() {
	// Create synopsis infobox
	let infobox = `{{infobox info
|pikmin=y
|family=Pikmin
|noname=y
}}`

	// Create synopsis
	let synopsis = ""
	if (parameters["customSynopsis"]) {
		synopsis = parameters["customSynopsis"]
	}
	else {
		synopsis = `${parameters["hasThe"] ? "The " : ""}'''<Pikmin>''' is a species of [[Pikmin family|Pikmin]] that ...`
	}
	// Text substitutions
	synopsis = synopsis.replaceAll("<subject>",getDisplayParam("pageName"))
	synopsis = synopsis.replaceAll("<Pikmin>",getDisplayParam("pageName"))
	synopsis = synopsis.replaceAll("<pageName>",getDisplayParam("pageName"))
	
	let ifgSectionStart = `{{in fanon games${parameters["hasThe"] ? "|the=y" : ""}}}`
	// Create fanon media sections
	
	let author = getDisplayParam("author")
	let projectName = getDisplayParam("fanonProjectName")
	let projectBanner = (parameters.customFanonGameBanner ? parameters.customFanonGameBanner : `media|${projectName}|${author}`)
	let customname = parameters.customname
	let additionalParams = parameters.additionalParams
	let doInfobox = parameters.doInfobox
	let infoboxPikmin = ``

	// Set up Pikmin infobox
	if(doInfobox) {
		infoboxPikmin = `{{infobox Pikmin${customname ? "\n|customname="+customname : ""}
		|image=
		|size=200px`+
		(additionalParams > 2 ? `\n|caption=` : ``)+`
		|icon=Pikmin icon.png
		|name=
		|resistance=None
		|strength=Average
		|digging=Average
		|mobility=Average
		|throw=Average
		|carry=1
		|candypop=None
		}}`
	}

	// Pikmin in Pikmin 4 have notes
	let pikminNotes = parameters.doCreatureNotes ? `
===Notes===
{{notes|Olimar's notes| <Olimar's notes...> }}
{{notes|Louie's notes| <Louie's notes...> }}
` : ""
	
	let navboxesFooter = parameters.doNavboxesFooter ? `{{navboxes|
<navigation templates>
}}
` : ""
	
	// Set up fanon games sections
	let description = `${parameters["hasThe"] ? "The " : ""} '''${customname ? customname : getDisplayParam("pageName")}''' is ...`

	let inFanonWriting = ""
	if (parameters["doFanonWriting"]) {
		inFanonWriting = `=In fanon writing=
		${ifgSectionStart}
==In ''${projectName}''==
{{${projectBanner}}}
${doInfobox ? infoboxPikmin+"\n" : ""}
${description}
${pikminNotes}{{clear}}
`		
	}
	let inFanonGames = ""
	if (parameters["doFanonGames"]) {
		inFanonGames = `=In fanon games=
		${ifgSectionStart}
==In ''${projectName}''==
{{${projectBanner}}}
${doInfobox ? infoboxPikmin+"\n" : ""}
${description}
${pikminNotes}{{clear}}
`
	}
	let userVersions = ""
	if (parameters["doUserVersions"]) {
		userVersions = `=User versions=
${ifgSectionStart}
==${author}'s version==
{{see|User:${author}}}
${doInfobox ? infoboxPikmin+"\n" : ""}
${description}
${pikminNotes}{{clear}}
`		
	}
	
	
	// Generate template
	let template = `
${infobox}
	
${synopsis}

__TOC__
{{clear}}

${inFanonWriting}${inFanonGames}${userVersions}
${navboxesFooter}
`
	
	/* TODO potential additions:
	
	- Support for <gallery> </gallery> tag
	
	*/
	template = ASCIItoHTML(template.trim())
	return template	
}

function getGameArticleTemplate() {
	let isPlayable = parameters.isPlayable
	let isDLC = parameters.isDLC
	let gameName = getDisplayParam("pageName")
	let author = getDisplayParam("author")
	let projectBanner = (parameters.customFanonGameBanner ? parameters.customFanonGameBanner : `media|${gameName}|${author}`)
	let additionalParams = parameters.additionalParams
	
	// Create infobox
	let infobox = `{{infobox game
|name=${gameName}
|image=
|size=200px`+
(additionalParams > 2 ? `\n|caption=` : ``)+`
|icon=
|rating=Unknown
|genre=N/A
|platforms=Unknown
|media=N/A`+
(additionalParams > 1 ? `\n|publisher=` : ``)+
(additionalParams > 2 ? `\n|release dates=` : ``)+`
|prequel=
|sequel=`+
(additionalParams > 0 ? `\n|dlc=` : ``)+`
|creator=[[User:${author}|${author}]]`+
(additionalParams > 0 ? `\n|collaborators=` : ``)+`
}}`
	
	let navboxesFooter = parameters.doNavboxesFooter ? `{{navboxes|
{{games}}
}}
` : ""
	
	// Generate template
	let template = `
{{italic title}}
{{${projectBanner}}}
${infobox}

'''''${gameName}''''' is a fan-made ''Pikmin'' game concept created by [[User:${author}|${author}]] ...

__TOC__

=Plot=

==Endings==

=Gameplay=

==Game modes==

=Content=

==Pikmin==

==Characters==

==Vehicles==

==Areas==

==Collectibles==

=Encyclopedias=

=Controls=

${navboxesFooter}
`
	
	/* TODO potential additions:
	
	- Functionality for isPlayable and isDLC as described in PikminFanon:Game article guidelines
	
	- "Other media" and "Gallery" as described in PikminFanon:Game article guidelines
	
	*/
	template = ASCIItoHTML(template.trim())
	return template	
}

function getAreaArticleTemplate() {
	let areaName = getDisplayParam("pageName")
	let author = getDisplayParam("author")
	let gameName = getDisplayParam("fanonProjectName")
	let projectBanner = (parameters.customFanonGameBanner ? parameters.customFanonGameBanner : `media|${gameName}|${author}`)
	let additionalParams = parameters.additionalParams
	
	var pikminDiscovered = ""
	for (const pikmin of parameters.pikminDiscovered) {
	  pikminDiscovered += `[[${pikmin}]], `
	}
	pikminDiscovered = pikminDiscovered.slice(0,-2)
		
	// Create infobox
	var infobox = ``
	
	if(additionalParams == 0) infobox = `{{infobox area
|pikmin=${pikminDiscovered}
|caves=${parameters.caves.length}
|treasures=
}}`	
	else if(additionalParams == 1) infobox = `{{infobox area
|customname=${areaName}
|pikmin=${pikminDiscovered}
|caves=${parameters.caves.length}
|treasures=
|collectibles=
}}`	
	else if(additionalParams == 2) infobox = `{{infobox area
|customname=${areaName}
|image=
|size=
|location=
|pikmin=${pikminDiscovered}
|caves=${parameters.caves.length}
|parts=
|treasures=
|fruits=
|collectibles=
|hazards=
|obstacles=
}}`	
	else infobox = `{{infobox area
|customname=${areaName}
|image=
|size=
|caption=
|location=
|pikmin=${pikminDiscovered}
|caves=${parameters.caves.length}
|parts=
|treasures=
|fruits=
|collectibles=
|hazards=
|obstacles=
|music=
|nocat=
}}`
	
	
	
	let plotSection = parameters.doPlotSection ? `==Plot==\n...\n\n` : ``
	let overviewSection = parameters.doOverviewSection ? `==Overview==\n...\n\n` : ``
	let keySectionsSection = parameters.keySections.length ? `==Key sections==\n` : ``
	if (parameters.keySections.length) {
		for (const section of parameters.keySections) {
		  keySectionsSection += `;${section}\n...\n`
		}
		keySectionsSection += "\n"
	}
	let cavesSection = parameters.caves.length ? `==Caves==\n` : ``
	if (parameters.caves.length) {
		for (const cave of parameters.caves) {
		  cavesSection += `*[[${cave}]]\n`
		}
		cavesSection += "\n"
	}
	let cutscenesSection = parameters.doCutscenesSection ? `==Cutscenes==
{| class="wikitable"
! Cutscene || Image || Trigger || Description
|-
! <name>
| [[File:|px]]
| <trigger>
| <description>
|}

` : ``

	let contentsSection = parameters.doContentsSection ? `==Contents==
===Enemies===
{{columns|2|
*
}}

` : ``
	
	
	
	
	let dataFilesSection = parameters.doDataFilesSection ? `==Data files==\n{{main|Data file}}\n...\n\n` : ``
	let gallerySection = parameters.doGallerySection ? `==Gallery==
<gallery>

</gallery>

` : ``
	
	let navboxesFooter = parameters.navboxName ? `{{navboxes|
{{${parameters.navboxName}}}
}}
` : ""
	
	// Generate template
	let template = `
{{${projectBanner}}}
${infobox}

'''''${areaName}''''' is an area in [[${gameName}]] ...\n
${plotSection}${overviewSection}${keySectionsSection}${cavesSection}${cutscenesSection}${contentsSection}${dataFilesSection}${gallerySection}${navboxesFooter}
`
	
	/* TODO potential additions:
	
	- Support for sublocations section instaed of just caves section (towers, dungeons, etc)
	
	*/
	template = ASCIItoHTML(template.trim())
	return template	
}

function getCaveArticleTemplate() {
	let caveName = getDisplayParam("pageName")
	let author = getDisplayParam("author")
	let gameName = getDisplayParam("fanonProjectName")
	let projectBanner = (parameters.customFanonGameBanner ? parameters.customFanonGameBanner : `media|${gameName}|${author}`)
	let additionalParams = parameters.additionalParams
	let caveArea = parameters.caveArea
	
	let sublevelNum = parameters.sublevelNum
	if (isNaN(sublevelNum)) sublevelNum = 1
	if (sublevelNum > 255) sublevelNum = 255
	
	// Create infobox
	var infobox = ``
	
	if(additionalParams == 0) infobox = `{{infobox cave
|location=[[${caveArea}]]
|sublevels=${sublevelNum}
|treasures=
|hazards=
}}`
	else if(additionalParams == 1) infobox = `{{infobox cave
|customname=${caveName}
|location=[[${caveArea}]]
|sublevels=${sublevelNum}
|treasures=
|collectibles=
|hazards=
}}`
	else if(additionalParams == 2) infobox = `{{infobox cave
|customname=${caveName}
|image=
|size=
|caption=
|location=[[${caveArea}]]
|sublevels=${sublevelNum}
|parts=
|treasures=
|fruits=
|collectibles=
|hazards=
|obstacles=
}}`
	else infobox = `{{infobox cave
|customname=${caveName}
|image=
|size=
|caption=
|location=[[${caveArea}]]
|sublevels=${sublevelNum}
|parts=
|treasures=
|fruits=
|collectibles=
|hazards=
|obstacles=
|nocat=
}}`
	
	let howToReachSection = parameters.doHowToReachSection ? `==How to reach==\n...\n\n` : ``

	let levelTerm = parameters.levelTerm
	let sublevelImages = parameters.sublevelImages
	let sublevelMusic = parameters.sublevelMusic
	var sublevelSections = ""
	for (let i = 1; i <= sublevelNum; i++) {
		sublevelSections += `==${levelTerm} ${i}==${sublevelImages ? "\n[[File:Cave.png|thumb|200px|Sublevel "+i+" of "+caveName+".]]" : ""}
		*'''Theme''':${sublevelMusic ? "\n*'''Music''':" : ""}
*'''Treasures''':
**
*'''Enemies''':
**
*'''Obstacles''':
**None
*'''Vegetation''':
**None
*'''Others''':
**None

Sublevel ${i} of ${caveName} ...

`
	}
	
	let navboxesFooter = parameters.navboxName ? `{{navboxes|
{{${parameters.navboxName}}}
}}
` : ""
	
	// Generate template
	let template = `
{{${projectBanner}}}
${infobox}

'''''${caveName}''''' is a cave in [[${gameName}]] ...\n
${howToReachSection}${sublevelSections}${navboxesFooter}
`
	
	/* TODO potential additions:
	
	- Checklist of hazards in the cave, similar to the one for enemy articles
	
	*/
	template = ASCIItoHTML(template.trim())
	return template	
}

































function ASCIItoHTML(str) {
	str = str.replaceAll('<', '&lt;')
	str = str.replaceAll('>', '&gt;')
	str = str.replaceAll('\n', '<br>')
	
	return str	
}

// Error handling
let oopsIndex = null
function getOopsMessage() {
	let msgs = [
		":/",
		"Oops",
		"I made a boo-boo yeah",
		"Well that wasn't supposed to happen.",
		"WHAT IS THIS STUPID ERROR MESSAGE?? I WANT TO MAKE MY SCORIA TYRANT ARTICLE NOW NOW NOW!!!!!",
		"Pretend that didn't happen",
		"NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
		"I JUST HAAAD TO OPEN MY MOUTH. I JUST HAAAD TO SAY IT.",
		"H*ck."
	]
	if (oopsIndex == null) oopsIndex = Math.floor(Math.random() * msgs.length)
	return msgs[oopsIndex]
	
}

document.getElementById("rewriteTemplate").click()