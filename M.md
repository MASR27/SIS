---
layout: page
title: Gas Station Dashboard
---

<div class="row">
  <div class="col-md-4">
    <div class="small-box bg-green">
      <div class="inner">
        <h3>125</h3>
        <p>Total Fuel Sales</p>
      </div>
      <div class="icon">
        <i class="fas fa-gas-pump"></i>
      </div>
      <a href="#" class="small-box-footer">
        View Details <i class="fas fa-arrow-circle-right"></i>
      </a>
    </div>
  </div>
  <div class="col-md-4">
    <div class="small-box bg-blue">
      <div class="inner">
        <h3>$14,550</h3>
        <p>Total Revenue</p>
      </div>
      <div class="icon">
        <i class="fas fa-money-bill-alt"></i>
      </div>
      <a href="#" class="small-box-footer">
        View Details <i class="fas fa-arrow-circle-right"></i>
      </a>
    </div>
  </div>
  <div class="col-md-4">
    <div class="small-box bg-red">
      <div class="inner">
        <h3>5</h3>
        <p>Pump Outages</p>
      </div>
      <div class="icon">
        <i class="fas fa-tools"></i>
      </div>
      <a href="#" class="small-box-footer">
        View Details <i class="fas fa-arrow-circle-right"></i>
      </a>
    </div>
  </div>
</div>

## Fuel Sales by Type

```python
import matplotlib.pyplot as plt

labels = ['Regular', 'Midgrade', 'Premium']
sizes = [60, 25, 15]
colors = ['#f39c12', '#00a65a', '#dd4b39']

plt.pie(sizes, labels=labels, colors=colors, autopct='%1.1f%%', startangle=90)

plt.axis('equal')
plt.show()
