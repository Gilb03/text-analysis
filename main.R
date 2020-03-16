 * `AFINN` from (http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010),
 * `bing` from (https://www.cs.uic.edu/~liub/FBS/sentiment-analysis.html), and
 * `nrc` from (http://saifmohammad.com/WebPages/NRC-Emotion-Lexicon.htm).



library(tidytext)
afinn_data <-get_sentiments("afinn")
View(afinn_data)



bing_data <- get_sentiments("bing")
View(bing_data)



nrc_data <- get_sentiments("nrc")
View(nrc_data)
