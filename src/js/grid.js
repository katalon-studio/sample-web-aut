if (window.pageId === 'grid.html') {


    var i = 0;
    var data = [];
    for (i; i < 11; i++) {
        data[i] = [
            'Task ' + i,
            'This is a sample task description',
            '5 days',
            Math.round(Math.random() * 100),
            '08/01/2017',
            '08/05/2017'
        ];
    };

    function toProgressBar(percentage) {
        var barClass;
        if (percentage < 20) {
            barClass = "progress-bar-slow";
        } else if (percentage < 50) {
            barClass = "progress-bar-medium";
        } else {
            barClass = "progress-bar-quick";
        }
        var html = '<div class="progress-bar ' + barClass + '" style="width:' + percentage + '%;"></div>';
        var bar = $(html);
        return bar;
    }

    function toRow(idx, rowData) {
        var row = $('<tr data-index="' + idx + '"></tr>');

        row.append('<td contenteditable="true">' + rowData[0] + '</td>');
        row.append('<td contenteditable="true">' + rowData[1] + '</td>');
        row.append('<td contenteditable="true">' + rowData[2] + '</td>');
        
        var completion = $('<td class="completion" contenteditable="true" data-completion="' + rowData[3] + '"></td>');
        completion.append(toProgressBar(rowData[3]));
        row.append(completion);

        row.append('<td><input type="text" class="grid-date" value="' + rowData[4] + '"></td>');
        row.append('<td><input type="text" class="grid-date" value="' + rowData[5] + '"></td>');
        row.append('<td><input type="button" class="row-reset" value="Reset"></td>');

        bindRowEvents(row)
        return row;
    }

    function bindRowEvents(row) {
        row.find('.grid-date').datepicker({format: "mm/dd/yyyy"});
        
        row.find('.completion')
            .on("focus", function(e) {
                var self = $(this);
                var bar = self.children(".progress-bar").first();
                var percentage = self.attr("data-completion");
                bar.hide();
                self.text(percentage);
            })
            .on("blur", function() {
                var self = $(this);
                var percentage = self.text();
                
                percentage = parseInt(percentage);
                if (isNaN(percentage) || percentage <= 0 || percentage > 100) {
                    percentage = parseInt(self.attr("data-completion"));
                }
                self.attr("data-completion", percentage);

                var barClass = "";

                self.text("");
                self.append(toProgressBar(percentage));
            });

        var rowReset = row.find('.row-reset').first();
        var events = rowReset.data('events');
        if (!(events && events.click)) {
                rowReset.on("click", function() {
                    var row = $(this).parents('tr').first();
                    var rowIdx = row.attr('data-index');
                    var originalData = data[rowIdx];
                    resetRow(row, originalData);
            });
        }
    }

    function resetRow(row, originalData) {
        var rowIdx = row.attr('data-index');
        var newRow = toRow(rowIdx, originalData);
        var newCells = newRow.children('td');
        var oldCells = row.children('td');
        for (var i = 0; i < oldCells.length - 1; i++) {
            oldCells.eq(i).empty();
            oldCells.eq(i).html(newCells.eq(i).html());
            newRow.empty();
        }
        bindRowEvents(row);
    }

    var grid = $("#grid");
    var body = grid.children("tbody").first();
    for (i = 0; i < data.length; i++) {
        body.append(toRow(i, data[i]));
    }
}