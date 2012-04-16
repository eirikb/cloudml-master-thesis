# Creds: https://github.com/jaskorpe/thegitwayofprocrastination/blob/master/thesis-template/Makefile
# Makefile for latex and bibtex

# Name of latex "project"
TARGET = thesis

# Name of bibtex references
REFERENCES = ../articles/bibliography.bib

# Svg figures to be included in project. Pdf for pdflatex and eps for
# latex.
SVG_FIG = $(wildcard *.svg)
PDF_FIG = $(SVG_FIG:.svg=.pdf)
EPS_FIG = $(SVG_FIG:.svg=.eps)

# Also do recompile if any tex files have changed. This is mainly for
# \input. Could lead to unexpected behaviour. Maybe use another suffix
# for files which should be \input'ed.
TEX_FILES = $(wildcard *.tex)

LATEX_WORK_FILES = $(TARGET).aux $(TARGET).bbl $(TARGET).blg \
	$(TARGET).lof $(TARGET).log $(TARGET).lot $(TARGET).toc \
	texput.log

DOT_FILES = $(*.dot)

.PHONY : all clean realclean $(SVG_FIGS) pdf fig

all: realclean pdf

pdf: $(TARGET).pdf

fig: $(PDF_FIG) $(EPS_FIG)


%.eps: %.svg
	inkscape -z -C --export-eps=$@ $< 2> /dev/null

%.pdf: %.svg
	inkscape -z -C --export-pdf=$@ $< 2> /dev/null


${TARGET}.dvi: $(TARGET).tex $(EPS_FIG) $(REFERENCES) $(TEX_FILES)
	latex $<
	bibtex $(TARGET)
	latex $<
	latex $<


$(TARGET).pdf: $(TARGET).tex $(PDF_FIG) $(REFERENCES) $(TEX_FILES)
	# Them hacks
	node ../articles/build/build.js
	dot2tex --figpreamble="\Large" -f tikz --codeonly dot/cloudml.dot > figs/dependency-tree-generated.tex
	# Them normal
	pdflatex -shell-escape $<
	bibtex $(TARGET)
	pdflatex -shell-escape $<
	pdflatex -shell-escape $<
	# Them hacks again
	#xdotool search --class mupdf key --window %@ r $<


clean:
	rm -f $(LATEX_WORK_FILES) *~

realclean: clean
	rm -f $(TARGET).pdf $(TARGET).dvi $(PDF_FIG) $(EPS_FIG)
