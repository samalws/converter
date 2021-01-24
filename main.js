inUnit = document.getElementById("inUnit")
outUnit = document.getElementById("outUnit")
measurement = document.getElementById("measurement")
answer = document.getElementById("answer")

units = {}
units.Gm = 1000000000
units.Mm = 1000000
units.km = 1000
units.hm = 100
units.dam = 10
units.m = 1
units.dm = 1/10
units.cm = 1/100
units.mm = 1/1000
units["μm"] = 1/1000000
units.nm = 1/1000000000
units.inch = .0254
units.foot = units.inch*12
units.yard = units.foot*3
units.mile = units.foot*5280

function buttonClick() {
	if (measurement.value === "") return;

	converted = measurement.value * units[inUnit.value] / units[outUnit.value]
	answer.innerHTML = String(measurement.value) + " " + inUnit.value + " = " + String(converted) + " " + outUnit.value
}
