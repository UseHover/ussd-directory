const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

if (!id) {
	// const root_url = "https://www.usehover.com/";
	const root_url = "https://stage.usehover.com/";

	let countries = [], country = null, channels = [], countriesData = [];

	function loadList(all, item)
	{
		let channel_url;
		// console.log(all, item)
		if (all) {
			channel_url = root_url + "api/channels?bookmarked=true&order_key=name"
		} else {
			channel_url = root_url + "api/channels?bookmarked=true&order_key=name" + "&country=" + item.alpha2;
		}

		fetch(channel_url)
			.then(response => response.json())
			.then(data =>
			{
				countriesData = data.data;
				UIDesign(data.data);
			})
	}

	function load(url, callback, errorCallback)
	{
		fetch(url)
			.then(response => response.json())
			.then(data =>
			{
				countries = data;
				data.forEach(item =>
				{
					const codePoints = item.alpha2.toUpperCase()
						.split('')
						.map(char => 127397 + char.charCodeAt());
					const li = document.createElement("li");
					li.className = "d-flx al-i-c px-2 py-1 country";
					li.innerHTML = `<span class="country">${String.fromCodePoint(...codePoints)}</span><p class="co-black ff-medium nanotext">${item.name}</p>`;
					li.onclick = function ()
					{
						const input = document.getElementById("searchInput");
						input.value = item.name;
						loadList(false, item);
					}
					if (document.getElementById("countrySearch")) {
						document.getElementById("countrySearch").append(li)
					}
				})
			});
	}

	function UIDesign(data)
	{
		document.getElementById("ussdList").innerHTML = "";
		const newDiv = document.createElement('ul');
		newDiv.className = "gridstyle";
		newDiv.setAttribute("id", "ulList");

		const pathName = window.location.pathname;

		data.forEach((item, index) =>
		{
			// console.log(data)
			if (pathName == "/directory") {
				const ussdLi = document.createElement("li");
				ussdLi.className = "list-card";
				ussdLi.onclick = function ()
				{
					location.href = `https://stage.ussd.directory/directory-details?id=${item.id}`;
				}
				ussdLi.innerHTML = `
				<p class="ff-medium mb-1h lh-24">
					${item.attributes.name}
				</p>
				<a href="tel:${item.attributes.root_code}" id="myInput" class="h5 smalltext lh-32 mt-0 mb-1h">
					${item.attributes.root_code}
				</a>
				<button class="copy no-wrap mb-1h show-mediumup" onclick="copy()">
					<span class="mr-1">
						Copy
					</span>
					<svg width="25" height="25">
						<use href="/uploads/icon-sprite.svg#copy"></use>
					</svg>
				</button>`;
				newDiv.append(ussdLi)
			} else if (index <= 15) {
				const ussdLi = document.createElement("li");
				ussdLi.className = "list-card";
				ussdLi.onclick = function ()
				{
					location.href = `https://stage.ussd.directory/directory-details?id=${item.id}`;
				}
				ussdLi.innerHTML = `
				<div class="space-between-groups mb-1h">
				<p class="ff-medium lh-24">
					${item.attributes.name}
				</p>
				<p class="co-purple picotext uppercase ff-medium">
				${item.attributes.country_alpha2}
				</p>
				</div>
				<a href="tel:${item.attributes.root_code}" id="myInput" class="h5 smalltext lh-32 mt-0 mb-1h">
					${item.attributes.root_code}
				</a>
				<button class="copy no-wrap mb-1h show-mediumup" onclick="copy()">
					<span class="mr-1">
						Copy
					</span>
					<svg width="25" height="25">
						<use href="/uploads/icon-sprite.svg#copy"></use>
					</svg>
				</button>`;
				newDiv.append(ussdLi)
			}
		})

		document.getElementById("ussdList").append(newDiv)
	}

	loadList(true)


	function filterCountries(value)
	{
		const filteredCountries = [];
		if (value === "all") {
			UIDesign(countriesData)
		} else {
			countriesData.filter(function (item)
			{
				if (item.attributes.institution_type === value) {
					filteredCountries.push(item)
				}
			})

			UIDesign(filteredCountries)
		}
	}

	function searchCountry()
	{
		const input = document.getElementById("searchInput");
		const filter = input.value.toUpperCase();
		const li = document.getElementsByClassName("country");
		for (let i = 0; i < li.length; i++) {
			const textHolder = li[i].getElementsByTagName("p")[0];
			if (textHolder) {
				const txtValue = textHolder.textContent || textHolder.innerText;
				if (txtValue.toUpperCase().indexOf(filter) > -1) {
					li[i].style.display = "";
				} else {
					li[i].style.display = "none";
				}
			}
		}
	}

	function search()
	{
		const input = document.getElementById("searchFilter");
		const filter = input.value.toUpperCase();
		const li = document.getElementsByClassName("list-card");

		for (let i = 0; i < li.length; i++) {
			const textHolder = li[i].getElementsByTagName("p")[0];
			if (textHolder) {
				const txtValue = textHolder.textContent || textHolder.innerText;
				if (txtValue.toUpperCase().indexOf(filter) > -1) {
					li[i].style.display = "";
				} else {
					li[i].style.display = "none";
				}
			}
		}
	}

	function loadCountries()
	{
		load(root_url + "api/countries?channels=true", onLoadCountries, countriesError);
	}

	loadCountries();

	function loadChannels()
	{
		if (window.location.href.includes("ussd-codes")) {
			const urlParams = new URLSearchParams(window.location.search);
			const url = window.location.href.replace(/\/$/, '');
			const lastSeg = url.substring(url.lastIndexOf('/') + 1);

			if (urlParams.get("country")) {
				country = countries.find(c => { return c.alpha2.toUpperCase() === urlParams.get("country").toUpperCase(); });
			} else if (lastSeg.length == 2) {
				country = countries.find(c => { return c.alpha2.toUpperCase() === lastSeg.toUpperCase(); });
			}

			let channel_url = root_url + "api/channels?bookmarked=true&order_key=name";
			if (country) {
				setPageCountry(country);
				channel_url += "&country=" + country.alpha2;
			}
			load(channel_url, onLoadChannels, channelsError);
		}
	}

	function setPageCountry(country)
	{
		$("#selected-country-dropdown").text(getCountryFlag(country) + " " + country.name.toUpperCase());
		document.title = document.title + ": " + country.name;
		if (descriptions && descriptions[country.alpha2.toUpperCase()]) {
			$("#custom-description").html(descriptions[country.alpha2.toUpperCase()]);
			document.getElementsByTagName('meta')["description"].content = descriptions[country.alpha2.toUpperCase()];
		}
	}

	function fillInDropdowns()
	{
		countries.forEach(country => addCountryToDropdown(country));
	}

	function addCountryToDropdown(country)
	{
		var link = document.createElement("a");
		link.className = "dropdown-item " + country.alpha2;
		link.href = "/ussd-codes/" + country.alpha2;
		link.innerHTML = getCountryFlag(country) + " " + country.name;
		var li = document.createElement("li");
		li.append(link);
		$("#dropdown-country-list").append(li.cloneNode(true));
		$("#header-dropdown-country-list").append(li);
	}

	function fillInList()
	{
		$("#channels-loading").hide();
		channels.forEach(channel => addChannel(channel));
	}

	function addChannel(channel)
	{
		var tr = document.createElement("tr");
		tr.append(getCodeCell(channel), getNameCell(channel));
		$("#channel-list").append(tr);
	}

	function getCodeCell(channel)
	{
		var cell = document.createElement("td");
		var link = document.createElement("a");
		link.href = "tel:" + channel.root_code.replace("#", "%23");
		link.innerHTML = channel.root_code;
		cell.append(link);
		return cell;
	}

	function getNameCell(channel)
	{
		var cell = document.createElement("td");
		var name = channel.name;
		cell.append(country == null ? name + " " + channel.country_alpha2.toUpperCase() : name);
		return cell;
	}

	function getCountryFlag(country)
	{
		const codePoints = country.alpha2.toUpperCase()
			.split('')
			.map(char => 127397 + char.charCodeAt());
		return String.fromCodePoint(...codePoints);
	}

	function onLoadCountries(result)
	{
		countries = result.map(function (d) { return d; });
		loadChannels();
		fillInDropdowns();
	}

	function onLoadChannels(result)
	{
		channels = result.data.map(function (d) { return d.attributes; });
		fillInList();
	}

	function countriesError()
	{
		$("#dropdown-country-label").text("Network error, please reload.");
	}

	function channelsError()
	{
		$("#channels-loading").text("Network error, please reload.")
	}
}
