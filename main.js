inMag = document.getElementById("inMag")
inUnit = document.getElementById("inUnit")
outMag = document.getElementById("outMag")
outUnit = document.getElementById("outUnit")
measurement = document.getElementById("measurement")
answer = document.getElementById("answer")

mags = {}
mags["_"] = 1
mags.G = 1000000000
mags.M = 1000000
mags.k = 1000
mags.h = 100
mags.da = 10
mags.d = 1/10
mags.c = 1/100
mags.m = 1/1000
mags["μ"] = 1/1000000
mags.n = 1/1000000000

units = {}
units.meter = 1
units.inch = .0254
units.foot = units.inch*12
units.yard = units.foot*3
units.mile = units.foot*5280

units.newton = 1
units.dyne = 1/100000
units.kilopond = 9.80665
units.pound = 4.48222
units.ounce = units.pound/16
units.poundal = 0.138225
units.ton = units.pound*2000

units.joule = 1
units.calorie = 4.1868
units.BTU = 1055.05585262
units.electronvolt = 1.602176e-19
units.footpound = 1.3558179483314
units.footpoundal = 0.0421401100938048
units.therm = 1.054804e8
units.thermie = 4.1868e6

function buttonClick() {
	if (measurement.value === "") return;

	converted = measurement.value * mags[inMag.value] * units[inUnit.value] / (mags[outMag.value] * units[outUnit.value])
	answer.innerHTML = String(measurement.value) + " " + inMag.value + " " + inUnit.value + " = " + String(converted) + " " + outMag.value + " " + outUnit.value
}
