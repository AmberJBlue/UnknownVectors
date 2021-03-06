var canvasWidth = window.innerWidth,
    canvasHeight = window.innerHeight,
    analyser = tsw.context().createAnalyser(),
    sineWave = tsw.osc(400),
    waveHeight = 200,
    noDataPoints = 10,
    freqData = new Uint8Array(analyser.frequencyBinCount),
    lines = [],
    paper, totalLines = canvasHeight / 20,
    svgNamespace = "http://www.w3.org/2000/svg",
    createSVGElement = function() {
        paper = document.createElementNS(svgNamespace, "svg"), paper.setAttribute("width", canvasWidth), paper.setAttribute("height", canvasHeight), paper.setAttribute("class", "waves"), paper.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), document.body.appendChild(paper)
    },
    createLine = function() {
        var e = document.createElementNS(svgNamespace, "path");
        e.setAttribute("stroke", "white"), e.setAttribute("stroke-width", 2), e.setAttribute("fill", "none"), paper.appendChild(e), lines.push(e)
    },
    updateLines = function() {
        var e, t, a = [],
            n = "",
            i = 0;
        for (analyser.getByteTimeDomainData(freqData), t = freqData.length, a.push("M0, " + waveHeight / 2), i = canvasWidth / t, e = 0; t > e; e++) e % noDataPoints === 0 && (pointX = e * i, pointY = freqData[e] / 128 * (waveHeight / 2), a.push("L" + pointX + ", " + pointY));
        a.push("L" + canvasWidth + ", " + waveHeight / 2), a.forEach(function(e) {
            n += e
        }), lines.forEach(function(e) {
            e.setAttribute("d", n)
        })
    },

    drawBorder = function() {
      var img = new Image();
      img.src = 'images/UnknownVectors.png';
    },

    createLines = function() {
        for (var e = 0; totalLines > e; e++) createLine()
    },
    setup = function() {
        createSVGElement(), createCanvas(canvasWidth, canvasHeight), createLines(), drawBorder(), function(e) {
            image(e, canvasWidth / 10, 100, canvasWidth / 10, canvasWidth / 10)
        }), tsw.getUserAudio(function(e) {
            tsw.connect(e, analyser)
        }, function(e) {
            console.log(e)
        })
    },
    draw = function() {
        updateLines()
    };
