const querystring = window.location.search;
const urlparams = new URLSearchParams(querystring);
const queryId = urlparams.get('id')

if (!queryId) {
	// const rootUrl = "https://www.usehover.com/";
	const rootUrl = "https://stage.usehover.com/";

	// let countries = [], country = null, channels = [], countriesData = [];

	// function loadList(all, item)
	// {
	// 	const pathName = window.location.pathname;

	// 	let channel_url;
	// 	if (pathName === "/directory-country/") {
	// 		const alpha = localStorage.getItem("alpha");
	// 		const countryName = localStorage.getItem("countryName");
	// 		const countryElement = document.getElementById("country-name");
	// 		countryElement.textContent = countryName;
	// 		channel_url = rootUrl + `api/channels?bookmarked=true&order_key=name&country=${alpha}`
	// 	} else if (all) {
	// 		channel_url = rootUrl + "api/channels?bookmarked=true&order_key=name"
	// 	} else {
	// 		channel_url = rootUrl + "api/channels?bookmarked=true&order_key=name" + "&country=" + item.alpha2;
	// 	}

	// 	fetch(channel_url)
	// 		.then(response => response.json())
	// 		.then(data =>
	// 		{
	// 			countriesData = data.data;
	// 			UIDesign(data.data);
	// 		})
	// 		.then(() =>
	// 		{
	// 			// console.log("here")
	// 			document.getElementById("loader").remove();
	// 			if (document.getElementById("view")) {
	// 				document.getElementById("view").classList.remove("d-none");
	// 				document.getElementById("view").classList.add("d-blk");
	// 			}
	// 		})
	// }

	// function load(url, callback, errorCallback)
	// {
	// 	fetch(url)
	// 		.then(response => response.json())
	// 		.then(data =>
	// 		{
	// 			countries = data;
	// 			data.forEach(item =>
	// 			{
	// 				const codePoints = item.alpha2.toUpperCase()
	// 					.split('')
	// 					.map(char => 127397 + char.charCodeAt());
	// 				const li = document.createElement("li");
	// 				li.className = "d-flx al-i-c px-2 py-1 country";
	// 				li.innerHTML = `<span class="country">${String.fromCodePoint(...codePoints)}</span><p class="co-black ff-medium nanotext">${item.name}</p>`;
	// 				li.onclick = function ()
	// 				{
	// 					const input = document.getElementById("searchInput");
	// 					input.value = item.name;
	// 					localStorage.setItem("alpha", item.alpha2);
	// 					localStorage.setItem("countryName", item.name);
	// 					window.location.href = "https://stage.ussd.directory/" + `directory-country/?alpha=${item.name}`
	// 				}
	// 				if (document.getElementById("countrySearch")) {
	// 					document.getElementById("countrySearch").append(li)
	// 				}
	// 			})
	// 		});
	// }

	function UIDesign(data)
	{
		document.getElementById("ussdList").innerHTML = "";
		const newDiv = document.createElement('ul');
		newDiv.className = "gridstyle";
		newDiv.setAttribute("id", "ulList");

		const pathName = window.location.pathname;

		// console.log(pathName)

		data.forEach((item, index) =>
		{
			if (pathName === "/directory/") {
				const ussdLi = document.createElement("li");
				ussdLi.className = "list-card";
				ussdLi.onclick = function ()
				{
					localStorage.setItem("id", item.id);
					window.location.href = "https://stage.ussd.directory/" + `directory-details/?name=${item.attributes.name}`
				}
				ussdLi.innerHTML = `
				<div class="space-between-groups listly mb-1h">
				<p class="ff-medium lh-24">
					${item.attributes.name}
				</p>
				<p class="co-purple picotext uppercase ff-medium mr-2-0">
				${item.attributes.country_alpha2}
				</p>
				</div>
				<a href="tel:${item.attributes.root_code}" id="myInput" class="h5 smalltext lh-32 mt-0 mb-1h">
					${item.attributes.root_code}
  			</a>
				<p class="copy no-wrap mb-1h ff-medium">
				${item.attributes.institution_type}
				</p>
				`;
				newDiv.append(ussdLi)
			} else if (index <= 15) {
				const ussdLi = document.createElement("li");
				ussdLi.className = "list-card";
				ussdLi.onclick = function ()
				{
					localStorage.setItem("id", item.id);
					window.location.href = "https://stage.ussd.directory/" + `directory-details/?name=${item.attributes.name}`
				}
				ussdLi.innerHTML = `
				<div class="space-between-groups listly mb-1h">
				<p class="ff-medium lh-24">
					${item.attributes.name}
				</p>
				<p class="co-purple picotext uppercase ff-medium mr-2-0">
				${item.attributes.country_alpha2}
				</p>
				</div>
				<a href="tel:${item.attributes.root_code}" id="myInput" class="h5 smalltext lh-32 mt-0 mb-1h">
					${item.attributes.root_code}
				</a>
				<p class="copy no-wrap mb-1h ff-medium">
				${item.attributes.institution_type}
				</p>
			`;
				newDiv.append(ussdLi)
			}
		})

		document.getElementById("ussdList").append(newDiv)
	}

	loadList(true)


	// function filterCountries(value)
	// {
	// 	const filteredCountries = [];
	// 	Array.from(document.getElementsByClassName("sub-filter")).forEach(item =>
	// 	{
	// 		if (item.id === value) {
	// 			document.getElementById(value).classList.add("on-active");
	// 		} else {
	// 			document.getElementById(item.id).classList.remove("on-active");
	// 		}
	// 	})
	// 	if (value === "all") {
	// 		UIDesign(countriesData)
	// 	} else {
	// 		countriesData.filter(function (item)
	// 		{
	// 			if (item.attributes.institution_type === value) {
	// 				filteredCountries.push(item);
	// 			}
	// 		})

	// 		UIDesign(filteredCountries)
	// 	}
	// }

	// function searchCountry()
	// {
	// 	document.getElementById('countrySearch').classList.add("uk-open");
	// 	const input = document.getElementById("searchInput");
	// 	const filter = input.value.toUpperCase();
	// 	const li = document.getElementsByClassName("country");
	// 	for (let i = 0; i < li.length; i++) {
	// 		const textHolder = li[i].getElementsByTagName("p")[0];
	// 		if (textHolder) {
	// 			const txtValue = textHolder.textContent || textHolder.innerText;
	// 			if (txtValue.toUpperCase().indexOf(filter) > -1) {
	// 				li[i].style.display = "";
	// 			} else {
	// 				li[i].style.display = "none";
	// 			}
	// 		}
	// 	}

	// 	if (li.length === 0) {
	// 		loadCountries();
	// 		loadList(true)
	// 	}
	// }

	// function search()
	// {
	// 	const input = document.getElementById("searchFilter");
	// 	const filter = input.value.toUpperCase();
	// 	const li = document.getElementsByClassName("list-card");

	// 	for (let i = 0; i < li.length; i++) {
	// 		const textHolder = li[i].getElementsByTagName("p")[0];
	// 		if (textHolder) {
	// 			const txtValue = textHolder.textContent || textHolder.innerText;
	// 			if (txtValue.toUpperCase().indexOf(filter) > -1) {
	// 				li[i].style.display = "";
	// 			} else {
	// 				li[i].style.display = "none";
	// 			}
	// 		}
	// 	}
	// }

	// function preventD()
	// {
	// 	const input = document.getElementById("searchFilter");
	// 	input.addEventListener("keypress", function (event)
	// 	{
	// 		if (event.key === "Enter") {
	// 			event.preventDefault()
	// 		}
	// 	});
	// }

// 	function loadCountries()
// 	{
// 		load(rootUrl + "api/countries?channels=true", onLoadCountries, countriesError);
// 	}

// 	loadCountries();

// 	function loadChannels()
// 	{
// 		if (window.location.href.includes("ussd-codes")) {
// 			const urlParams = new URLSearchParams(window.location.search);
// 			const url = window.location.href.replace(/\/$/, '');
// 			const lastSeg = url.substring(url.lastIndexOf('/') + 1);

// 			if (urlParams.get("country")) {
// 				country = countries.find(c => { return c.alpha2.toUpperCase() === urlParams.get("country").toUpperCase(); });
// 			} else if (lastSeg.length == 2) {
// 				country = countries.find(c => { return c.alpha2.toUpperCase() === lastSeg.toUpperCase(); });
// 			}

// 			let channel_url = rootUrl + "api/channels?bookmarked=true&order_key=name";
// 			if (country) {
// 				setPageCountry(country);
// 				channel_url += "&country=" + country.alpha2;
// 			}
// 			load(channel_url, onLoadChannels, channelsError);
// 		}
// 	}

// 	function setPageCountry(country)
// 	{
// 		$("#selected-country-dropdown").text(getCountryFlag(country) + " " + country.name.toUpperCase());
// 		document.title = document.title + ": " + country.name;
// 		if (descriptions && descriptions[country.alpha2.toUpperCase()]) {
// 			$("#custom-description").html(descriptions[country.alpha2.toUpperCase()]);
// 			document.getElementsByTagName('meta')["description"].content = descriptions[country.alpha2.toUpperCase()];
// 		}
// 	}

// 	function fillInDropdowns()
// 	{
// 		countries.forEach(country => addCountryToDropdown(country));
// 	}

// 	function addCountryToDropdown(country)
// 	{
// 		let link = document.createElement("a");
// 		link.className = "dropdown-item " + country.alpha2;
// 		link.href = "/ussd-codes/" + country.alpha2;
// 		link.innerHTML = getCountryFlag(country) + " " + country.name;
// 		let li = document.createElement("li");
// 		li.append(link);
// 		$("#dropdown-country-list").append(li.cloneNode(true));
// 		$("#header-dropdown-country-list").append(li);
// 	}

// 	function fillInList()
// 	{
// 		$("#channels-loading").hide();
// 		channels.forEach(channel => addChannel(channel));
// 	}

// 	function addChannel(channel)
// 	{
// 		let tr = document.createElement("tr");
// 		tr.append(getCodeCell(channel), getNameCell(channel));
// 		$("#channel-list").append(tr);
// 	}

// 	function getCodeCell(channel)
// 	{
// 		let cell = document.createElement("td");
// 		let link = document.createElement("a");
// 		link.href = "tel:" + channel.root_code.replace("#", "%23");
// 		link.innerHTML = channel.root_code;
// 		cell.append(link);
// 		return cell;
// 	}

// 	function getNameCell(channel)
// 	{
// 		let cell = document.createElement("td");
// 		let name = channel.name;
// 		cell.append(country == null ? name + " " + channel.country_alpha2.toUpperCase() : name);
// 		return cell;
// 	}

// 	function getCountryFlag(country)
// 	{
// 		const codePoints = country.alpha2.toUpperCase()
// 			.split('')
// 			.map(char => 127397 + char.charCodeAt());
// 		return String.fromCodePoint(...codePoints);
// 	}

// 	function onLoadCountries(result)
// 	{
// 		countries = result.map(function (d) { return d; });
// 		loadChannels();
// 		fillInDropdowns();
// 	}

// 	function onLoadChannels(result)
// 	{
// 		channels = result.data.map(function (d) { return d.attributes; });
// 		fillInList();
// 	}

// 	function countriesError()
// 	{
// 		$("#dropdown-country-label").text("Network error, please reload.");
// 	}

// 	function channelsError()
// 	{
// 		$("#channels-loading").text("Network error, please reload.")
// 	}
// }
