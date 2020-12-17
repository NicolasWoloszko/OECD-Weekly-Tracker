## Tracking GDP growth in real time 





<h2>Select the wallpaper of your choice by clicking on it.<br>
Alternatively, use the dropdown list.
</h2>

<div>

<select 
   id="DropdownListID" 
   name="DropdownListName" 
   onchange="SelectAnItem(this.selectedIndex)">
<option>Select here or click a pattern above.</option>
<option>Fleur</option>
<option>Nine Patch</option>
<option>Pink Gate</option>
<option>Sand Dollar</option>
<option>Sandria</option>
<option>Blue Wheel</option>
</select>
</div>
<br>  
<div>
<img id="ImageID1" 
   onclick="SelectAnItem(1)" 
   class="imgBoxSelection" 
   src="http://www.willmaster.com/library/images/ImageClickSelects/flower.jpg">
<img id="ImageID2" 
   onclick="SelectAnItem(2)" 
   class="imgBoxSelection" 
   src="http://www.willmaster.com/library/images/ImageClickSelects/ninepatch.jpg">
<img id="ImageID3" 
   onclick="SelectAnItem(3)" 
   class="imgBoxSelection" 
   src="http://www.willmaster.com/library/images/ImageClickSelects/pinkgate.jpg">
<br>
<img id="ImageID4" 
   onclick="SelectAnItem(4)" 
   class="imgBoxSelection" 
   src="http://www.willmaster.com/library/images/ImageClickSelects/sanddollar.jpg">
<img id="ImageID5" 
   onclick="SelectAnItem(5)" 
   class="imgBoxSelection" 
   src="http://www.willmaster.com/library/images/ImageClickSelects/sandria.jpg">
<img id="ImageID6" 
   onclick="SelectAnItem(6)" 
   class="imgBoxSelection" 
   src="http://www.willmaster.com/library/images/ImageClickSelects/wheel.jpg">

</div>






The OECD Weekly Tracker of GDP growth provides a high-frequency indicator of economic activity with a delay of less than five days, making it particularly useful when activity is changing very rapidly. It also has a wide country coverage of OECD and G20 countries. The Tracker is thus particularly well suited to assessing activity during the turbulent period of the current global pandemic. The Tracker provides estimates of year-on-year growth rate in weekly GDP. It applies a machine learning model to a panel of Google Trends data for 46 countries, and aggregates together information about search behaviour related to consumption, labour markets, housing, trade, industrial activity and economic uncertainty.

# Selected charts

### Weekly Tracker for the United States
![](Figures/Weekly_Tracker_United%20States.png)

### Projections for Q4 2020 (quarter-on-quarter)

![](Figures\Histogram%20Q4%20qoq.png)

Quarter-on-quarter estimates are derived from the Weekly Tracker using a methodology described [here](qoq.md).

# Data

Download the Weekly Tracker data [here](Data\Weekly_Tracker_Excel.xlsx). 

Weekly Tracker charts for G20 countries are [here](charts.md).

Additional data files: 
* [Weekly Tracker (human readable)](Data\Weekly_Tracker_Excel.xlsx)
* [Weekly Tracker database](Data\weekly_tracker.xlsx)
* [Quarterly estimates (year-on-year)](Data\quarterly_tracker.xlsx)
* [Quarterly estimates (quarter-on-quarter)](Data\quarter_on_quarter.xlsx)

# Methodology
* [Working Paper]((https://doi.org/10.1787/6b9c7518-en))
* [OECD Economic Outlook, Chapter 2, Issue Note 1](https://www.oecd-ilibrary.org/sites/39a88ab1-en/1/3/2/1/index.html?itemId=/content/publication/39a88ab1-en&_csp_=fd64cf2a9a06f738f45c7aeb5a6f5024&itemIGO=oecd&itemContentType=issue)

# References 

Woloszko, N. (2020), ["Tracking activity in real time with Google Trends"](https://doi.org/10.1787/6b9c7518-en), OECD Economics Department Working Papers, No. 1634, OECD Publishing, Paris, https://doi.org/10.1787/6b9c7518-en.


