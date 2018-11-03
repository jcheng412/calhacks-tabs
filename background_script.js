
// Initializing the extension
let processResults = function (results) {
	console.log(results)
}

chrome.bookmarks.getTree(function(results) {
	if (chrome.runtime.lastError)
		throw chrome.runtime.lastError

	chrome.bookmarks.create({ title: "Ext Bookmarks"}, 
		function (newFolder) {
			if (chrome.runtime.lastError)
				throw chrome.runtime.lastError.message
			console.log(`${newFolder} created`)
			createBookmark(newFolder.id)
		})
});


/*
console.log('Bookmark Bar')
console.log(bookmarkBar)

var bookmarkFolder = chrome.bookmarks.create({'parentId': bookmarkBar[0].id,
                         'title': 'Extension bookmarks'},
                        function(newFolder) {
                            console.log("added folder: " + newFolder.title);
                            createBookmark(newFolder.id);
                        });
*/
function createBookmark(extensionsFolderId) {
    chrome.bookmarks.create({'parentId': extensionsFolderId,
                             'title': 'Extensions doc',
                             'url': 'http://code.google.com/chrome/extensions'});
}

