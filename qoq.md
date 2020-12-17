# Deriving quarter-on-quarter quarterly estimates

The OECD Weekly Tracker provides weekly estimates of year-on-year GDP growth. The method to derive quarterly estimates of quarter-on-quarter is described below, and the estimates are to be found [here](https://algobank.oecd.org:4430/Nicolas.WOLOSZKO/the-oecd-weekly-tracker/-/raw/master/Data/quarter_on_quarter.xlsx).

## 1. Getting quarterly estimates of year-on-year GDP growth

Quarterly estimates are derived using the (un)weighted mean of Weekly Tracker estimates over the quarter. This seems a reasonable approximation of the exact formula, which is the mean of weekly rates weighted by the share of the each week's GDP in total quarterly GDP. 

## 2. Getting quarterly estimates of quarter-on-quarter GDP growth

Quarter-on-quarter GDP growth rates are derived from the quarterly estimtaes of yoy GDP growth rates using the following formula:

 
```math
y_{qoq}^{Q2-2020} = \frac{1 + y_{yoy}^{Q2-2020}}{1 + y_{yoy}^{Q1-2020}} * (1 + y_{qoq}^{Q2-2019})
```

$$y_{qoq}^{Q2-2020} = \frac{1 + y_{yoy}^{Q2-2020}}{1 + y_{yoy}^{Q1-2020}} * (1 + y_{qoq}^{Q2-2019})$$

$y_{qoq}^{Q2-2019}$ is taken from the OECD Quarterly National Accounts. 

### Figure 1. GDP growth (quarter-on-quarter) projections for Q4 2020
![](Figures/Histogram%20Q4%20qoq.png)

