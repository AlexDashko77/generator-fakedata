import { makeAutoObservable } from "mobx";
import { IData } from "./../Interfaces/index";
import { faker } from "@faker-js/faker";
class FakeData {
  data: IData[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  clearData() {
    this.data = [];
  }

  getData(region: string, errors: number, seed: number, count: number): void {
    faker.setLocale(region);
    faker.seed(seed);
    for (let i = 1; i <= count; i++) {
      const obj: IData = {
        id: faker.datatype.uuid(),
        fullName: faker.name.fullName(),
        addres: faker.address.streetAddress(),
        phone: faker.phone.number(),
      };
      if (true) {
        let c = false;
        for (let i = 0; i < this.data.length; i++) {
          if (obj.fullName == this.data[i].fullName) {
            c = true;
            break;
          }
        }
        if (c) {
          i -= 1;
          continue;
        }
      }

      for (let j = 0; j < errors; j++) {
        const errorType = faker.datatype.number({ min: 1, max: 3 });
        const whereError = faker.datatype.number({ min: 1, max: 3 });
        const errorIndex = faker.datatype.number({
          min: 0,
          max: obj.fullName.length - 1,
        });
        const errorChar = faker.random.alphaNumeric();

        switch (errorType) {
          case 1:
            if (whereError === 1) {
              obj.fullName =
                obj.fullName.slice(0, errorIndex) +
                obj.fullName.slice(errorIndex + 1);
            } else if (whereError === 2) {
              obj.addres =
                obj.addres.slice(0, errorIndex) +
                obj.addres.slice(errorIndex + 1);
            } else {
              obj.phone =
                obj.phone.slice(0, errorIndex) +
                obj.phone.slice(errorIndex + 1);
            }
            break;
          case 2:
            if (whereError === 1) {
              obj.fullName =
                obj.fullName.slice(0, errorIndex) +
                errorChar +
                obj.fullName.slice(errorIndex);
            } else if (whereError === 2) {
              obj.addres =
                obj.addres.slice(0, errorIndex) +
                errorChar +
                obj.addres.slice(errorIndex);
            } else {
              obj.phone =
                obj.phone.slice(0, errorIndex) +
                errorChar +
                obj.phone.slice(errorIndex);
            }
            break;
          case 3:
            if (whereError === 1) {
              let char1 = obj.fullName[errorIndex];
              let char2 = obj.fullName[errorIndex + 1];
              obj.fullName =
                obj.fullName.slice(0, errorIndex) +
                char2 +
                char1 +
                obj.fullName.slice(errorIndex + 2);
            } else if (whereError === 2) {
              let char1 = obj.addres[errorIndex];
              let char2 = obj.addres[errorIndex + 1];
              obj.addres =
                obj.addres.slice(0, errorIndex) +
                char2 +
                char1 +
                obj.addres.slice(errorIndex + 2);
            } else {
              let char1 = obj.phone[errorIndex];
              let char2 = obj.phone[errorIndex + 1];
              obj.phone =
                obj.phone.slice(0, errorIndex) +
                char2 +
                char1 +
                obj.phone.slice(errorIndex + 2);
            }
        }
      }
      this.data = [...this.data, obj];
    }
  }
}

export default new FakeData();
