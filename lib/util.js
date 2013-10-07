Array.prototype.findById = function(value)
{
	for(var i =0 ;i < this.length; i++)
		if(typeof(this[i].id) != 'undefined' && this[i].id == value)
			return  this[i];
		else if(typeof(this[i].id) == 'undefined')
			break;
	return null;
}

Array.prototype.find =  function(condition)
{
	for(var i =0 ;i < this.length; i++)
	{
		var isPassCondition = true;
		for(var index in condition) { 
			if(this[i][index] != condition[index])
			{
				isPassCondition = false;
				break;
			}
		}
		if(isPassCondition)
			return this[i];
	}
	return null;
}

/*
*   if(isVar($scope.search).defined)
*   
*/

function isVar(variable)
{
	var type = typeof(variable);
	var item = {}
	item.defined = (type != 'undefined');
	item.number = (type == 'number');
	item.string = (type == 'string');
	item.canCalculate = !isNaN(variable);
	item.array = (Object.prototype.toString.call( variable ) === '[object Array]')
	item.object = (type == 'object')
	return item;
}

/*
*
*
*/
Date.prototype.toSqlDate = function()
{
	var year = this.getYear() + 1900;
	var month = this.getMonth();
	month++;
	if(month < 10)
		month = "0" + month;
	var date = this.getDate();
	if(date < 10)
		date = "0" + date;
	return year + "-" +month+"-"+date;
}
