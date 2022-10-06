const scoring = entries => {
    final = [];
    for (i = 0; i < entries.length; i ++) {
            final.push("entry: " + entries[i].entry +
            entries[i].champ + "is champ" +
            entries[i].sec + "is sec" +
            entries[i].big10 + "is big10"); 
    }

    return final;
};

exports.scoring = scoring;