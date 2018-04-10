//'use strict';
// Enter your js code Here

var a = new Array;
var b = new Array;
var c = new Array;

a = [1,21,35,42,51,65,70,87,91,105];
b = [11,32,43,54,75,86,97,103,109,120];

var aPointer = 0;
var bPointer = 0;

var finished = false;
var i;

var counter = 0;

while (finished == false)
{
    if (a[aPointer] < b[bPointer])
    {
      counter++;
      c.push(a[aPointer]);
      aPointer++;
    }
    else
    {
      counter++;
      c.push(b[bPointer]);
      bPointer++;
    }

    if (aPointer == a.length)
    {
      for (i=bPointer; i < b.length; i++ )
      {
        c.push(b[bPointer++]);
        finished = true;
      }
    }

    if (bPointer == b.length)
    {
      for (i=aPointer; i < a.length; i++ )
      {
        c.push(a[aPointer++]);
        finished = true;
      }
    }

}

alert (c);
alert (counter + " operations");
