## Tracking GDP growth in real time 

The OECD Weekly Tracker of GDP growth provides a real-time high-frequency indicator of economic activity using machine learning and Google Trends data. It  has a wide country coverage of OECD and G20 countries. The Tracker is thus particularly well suited to assessing activity during the turbulent period of the current global pandemic. The Tracker provides estimates of year-on-year growth rate in weekly GDP. It applies a machine learning model to a panel of Google Trends data for 46 countries, and aggregates together information about search behaviour related to consumption, labour markets, housing, trade, industrial activity and economic uncertainty (see [blog](https://oecdecoscope.blog/2020/12/14/can-google-trends-be-used-to-track-economic-activity-in-real-time1/))

Additional information can be found on the [Weekly Tracker webpage](https://www.oecd.org/economy/weekly-tracker-of-gdp-growth/)

Please note these are not official OECD forecasts, which are most recently published in the [OECD Economic Outlook](https://www.oecd.org/economic-outlook/). However, the Tracker is one of several indicators that feeds into the OECD forecast process, which helps to situate the current state of the economy.

# The Weekly Tracker

The sad anniversary of the first economic impact of the pandemic is now passing in many countries. However, this can make it difficult to interpret recent movements in the Weekly Tracker because it is based on GDP growth compared to the same week a year earlier. In particular, recent sharp upturns in the Tracker may reflect the fact that GDP is being compared with a period a year earlier when GDP had fallen sharply as the first set of lockdown measures was imposed. In order to provide a clearer visual representation of recent movements in activity, a new version of the Tracker is here introduced, which measures the percentage difference in GDP relative to a pandemic-free counterfactual (where the counterfactual is taken to be the OECD Economic Outlook forecast published in December 2019). To be clear, this Counterfactual Tracker is a simple transformation of the original Tracker (described in more detail in a note available here) and so continues to be essentially based on recent data on Google Trends. For some countries (for example France and Italy) recent upturns in the Weekly Tracker do not appear in the Counterfactual Tracker, indicating that there is no sign of any recent recovery, whereas for other countries (for example the United States) the upturn is also present in the Counterfactual Tracker and so suggests some recent strengthening in activity.

### Weekly Tracker: France
![](Figures/Weekly_Tracker_France.png)

Note: The blue confidence band shows 95% confidence intervals. Red dots representing GDP growth are official outturns. Monthly GDP growth series are used when available (for the United Kingdom and Canada). The darkness of the grey background reflects confinement stringency based on the Oxford Blavatnik Index. 

Source: OECD Weekly Tracker (Woloszko, 2020); OECD Economic Outlook; and Oxford COVID-19 Government Response Tracker (Hale et al., 2020).


# Data

* [Weekly Tracker (human-readable)](Data\Weekly_Tracker_Excel.xlsx)
* [Weekly Tracker (machine-readable)](Data\weekly_tracker.xlsx)
* [Quarterly estimates (year-on-year)](Data\quarterly_tracker.xlsx)
* [Quarterly estimates (quarter-on-quarter)](Data\quarter_on_quarter.xlsx)

# Methodology

Signals about multiple facets of the economy from Google Trends are extracted and aggregated using machine learning in order to infer a timely picture of the macro economy. The algorithm extracts and compiles information about consumption (e.g. from searches for “vehicles”, “households appliances”), labour markets (e.g. “unemployment benefits”), housing (e.g. “real estate agency”, “mortgage”), business services (e.g. “venture capital”, “bankruptcy”), industrial activity (e.g. “maritime transport”, “agricultural equipment”), trade (e.g., “exports”, “freight”) as well as economic sentiment (e.g. “recession”) and poverty (e.g. “food bank”).  Using many variables reduces the risk related to structural breaks in specific series, which was highlighted by the failure of the “Google Flu” experiment.

The Weekly Tracker uses a two-step model to nowcast weekly GDP growth based on Google Trends. First, a quarterly model of GDP growth is estimated based on Google Trends search intensities at a quarterly frequency. Second, the relationship between Google Trends and activity, using the same elasticities estimated from the quarterly model, is applied to the weekly Google Trends series to yield a weekly tracker. The OECD Weekly Tracker can thus be interpreted as an estimate of the year on year growth rate of “weekly GDP” (the same week compared to the previous year). 

High-frequency and big data have limitations as scientific analysis is usually not the original purpose of their collection. These caveats call for specific attention and statistical pre processing. Among the many available Google Trends variables, 215 “categories” and “topics” are judged relevant for economic analysis and selected to feature in the model. Selected variables are transformed to year on year growth rates. Finally, as the Google Search user base has increased dramatically since 2004, the relative search intensities of most search categories decrease over time. This long term trend is filtered out using a methodology described in Woloszko (2020). 

# References 

Woloszko, N. (2020), ["Tracking activity in real time with Google Trends"](https://doi.org/10.1787/6b9c7518-en), OECD Economics Department Working Papers, No. 1634, OECD Publishing, Paris, https://doi.org/10.1787/6b9c7518-en.

OECD (2020), OECD Economic Outlook, Volume 2020 [Issue 2]((https://www.oecd-ilibrary.org/sites/39a88ab1-en/1/3/2/1/index.html?itemId=/content/publication/39a88ab1-en&_csp_=fd64cf2a9a06f738f45c7aeb5a6f5024&itemIGO=oecd&itemContentType=issue)): Preliminary version, OECD Publishing, Paris, https://dx.doi.org/10.1787/39a88ab1-en.

Woloszko, N., [Can Google Trends be used to track economic activity in real-time?](https://oecdecoscope.blog/2020/12/14/can-google-trends-be-used-to-track-economic-activity-in-real-time1/), Ecoscope post, December 2020.

Woloszko, N., [Tracking GDP using Google Trends and machine learning: A new OECD model](https://voxeu.org/article/tracking-gdp-using-google-trends-and-machine-learning), VoxEU, December 2020


