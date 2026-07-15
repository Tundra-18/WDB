let count = 1;

do {

    if (count % 2 === 0) {
        count++;
        continue;
    }

    console.log(count);
    count++;

} while (count <= 5);

