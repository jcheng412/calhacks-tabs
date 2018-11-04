
// this is defining a function
let processResults = function (results) {
	console.log(results)
}

//this gets the full list of bookmarks
chrome.bookmarks.getTree(function(results) {
	//error check
	if (chrome.runtime.lastError)
		throw chrome.runtime.lastError

//creating a folder
	chrome.bookmarks.create({ title: "Ext Bookmarks"},
		function (newFolder) {
			if (chrome.runtime.lastError)./Library/Application Support/Google/Chrome/Default/Sync Extension Settings/lcaelgondnfehcambmdhhfokjknhfahc
				throw chrome.runtime.lastError.message
			console.log(`${newFolder} created`)
			createBookmark(newFolder.id)
		})
});



console.log('Bookmark Bar')

/*
console.log(bookmarkBar)

var bookmarkFolder = chrome.bookmarks.create({'parentId': bookmarkBar[0].id,
                         'title': 'Extension bookmarks'},
                        function(newFolder) {
                            console.log("added folder: " + newFolder.title);
                            createBookmark(newFolder.id);
                        });
*/

//this creates a bookmarks
function createBookmark(extensionsFolderId) {
    chrome.bookmarks.create({'parentId': extensionsFolderId,
                             'title': 'Extensions doc',
                             'url': 'http://code.google.com/chrome/extensions'});
}
