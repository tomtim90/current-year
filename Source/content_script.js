walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bthe current year\b/g, "2016");
	v = v.replace(/\bthe Current Year\b/g, "2016");
	v = v.replace(/\bthe Current year\b/g, "2016");
	v = v.replace(/\bthe current Year\b/g, "2016");
	v = v.replace(/\bTHE CURRENT YEAR\b/g, "2016");
	v = v.replace(/\bthe CURRENT YEAR\b/g, "2016");
	v = v.replace(/\bThe CURRENT YEAR\b/g, "2016");
	v = v.replace(/\bThe current year\b/g, "2016");
	v = v.replace(/\bThe Current Year\b/g, "2016");
	v = v.replace(/\bThe Current year\b/g, "2016");
	v = v.replace(/\bThe current Year\b/g, "2016");
	v = v.replace(/\bcurrent year\b/g, "2016");
	v = v.replace(/\bCurrent Year\b/g, "2016");
	v = v.replace(/\bCurrent year\b/g, "2016");
	v = v.replace(/\bcurrent Year\b/g, "2016");
	v = v.replace(/\bCURRENT YEAR\b/g, "2016");
	v = v.replace(/\bC U R R E N T Y E A R\b/g, "2 0 1 6");
	
	textNode.nodeValue = v;
}