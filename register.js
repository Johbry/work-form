const {Builder, By, Key, util, Browser, until} = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
const { addAsyncMethod } = require("wd");


const toStop = async (time) =>{
    await new Promise(res => setTimeout(res, time))  
}

async function openPage() {

let driver = await new Builder().forBrowser(Browser.CHROME).build();
await driver.get('https://hiringroom.com/jobs/get_vacancy/63f7666172e7a655e042aef2/candidates/new?source=linkedinjobs#step2')
await driver.manage().window().maximize();
await toStop(1000);

const sendPhoto = await driver.findElement(By.xpath("//input[@type='file']"));
await sendPhoto.sendKeys('C:/Users/johbr/Documents/work_form/IMG_20230127_213959 (2).jpg');
await toStop(1000);


let nameuser = await driver.findElement(By.id("firstname"));
await nameuser.sendKeys('eve');
await toStop(1000);

let lastname = await driver.findElement(By.id("lastname"));
await lastname.sendKeys('Mel');

let mailuser = await driver.findElement(By.id("email"));
await mailuser.sendKeys('jmel@gmail.com');

let confiEmail = await driver.findElement(By.id("emailConfirm"));
await confiEmail.sendKeys('jmel@gmail.com');

let dniuser = await driver.findElement(By.id("dni"));
await dniuser.sendKeys('96000000');
await toStop(1000);

let numberuser = await driver.findElement(By.css('.sc-gtsrHT.dIVqQs input[type="number"]'));
await numberuser.sendKeys('1139200000');

let selectAll = await driver.findElements(By.css(".custom-hr-select-container"));
const selectTypePhone = selectAll[0];
const selectGender = selectAll[1];
const selectCountry = selectAll[2];
const selectResident = selectAll[3];
const selectState = selectAll[4];
const selectProvince = selectAll[5];
const selectDay = selectAll[6];
const selectMonth = selectAll[7];
const selectYear = selectAll[8];

await selectTypePhone.click();
await toStop(1000);

const phoneOption = await driver.findElement(By.css(".custom-hr-select-container .custom-hr-select__menu .custom-hr-select__option:nth-child(1)"));
await phoneOption.click();
await toStop(1000);

await selectGender.click();
await toStop(1000);
let genderOption = await driver.findElement(By.css(".custom-hr-select-container .custom-hr-select__menu-list .custom-hr-select__option:nth-child(3)"));
await genderOption.click();

await selectCountry.click();
let countryOption = await driver.findElement(By.css(".custom-hr-select-container .custom-hr-select__menu-list .custom-hr-select__option:nth-child(9)"));
await countryOption.click();

await toStop(1000);


await selectResident.click();
let countryResident = await driver.findElement(By.css(".custom-hr-select-container .custom-hr-select__menu-list .custom-hr-select__option:nth-child(1)"));
await countryResident.click();
await toStop(2000);

await selectState.click();
let stateOption = await driver.findElement(By.css(".custom-hr-select-container .custom-hr-select__menu-list .custom-hr-select__option:nth-child(1)"));
await stateOption.click();
await toStop(1000);

await selectProvince.click();
let provinceOption = await driver.findElement(By.css(".custom-hr-select-container .custom-hr-select__menu-list .custom-hr-select__option:nth-child(1)"));
await provinceOption.click();
await toStop(2000);

await selectDay.click();
let dayOption = await driver.findElement(By.css(".custom-hr-select-container .custom-hr-select__menu-list .custom-hr-select__option:nth-child(12)"));
await dayOption.click();
await toStop(1000);

await selectMonth.click();
let monthOption = await driver.findElement(By.css(".custom-hr-select-container .custom-hr-select__menu-list .custom-hr-select__option:nth-child(5)"));
await monthOption.click();
await toStop(1000);

await selectYear.click();
let yearOption = await driver.findElement(By.css(".custom-hr-select-container .custom-hr-select__menu-list .custom-hr-select__option:nth-child(33)"));
await yearOption.click();
await toStop(1000);

let buttonNext = await driver.findElement(By.css(".sc-fnVZcZ.jqdEKA.postulation-next-step"));
await buttonNext.click();
await toStop(2000);

//PASO 2

let addStudy = await driver.findElement(By.css(".sc-iqAclL.sc-hBMUJo.sc-fXazdy.hVYATZ.liylkT.UjHkE"));
await addStudy.click();
await toStop(1000);

let tittleStudy = await driver.findElement(By.id("educations.0.degree"));
await tittleStudy.sendKeys("Lic. Contaduria Pública");
await toStop(1000);

let selector = await driver.findElements(By.css(".custom-hr-select__placeholder.css-1wa3eu0-placeholder"));
const selectcountryStudy = selector[0]
const selectuniversityStudy = selector[1]
const selectArea = selector[2]
const selectgradeStudy = selector[3] 
const selectstatus = selector[4]
const selectyearStart = selector[5]
const selectyearEnd = selector[6]

await selectcountryStudy.click();
let countryStudyoption = await driver.findElement(By.css(".custom-hr-select-container .custom-hr-select__menu-list .custom-hr-select__option:nth-child(9)"));
await countryStudyoption.click();
await toStop(1000);

await selectuniversityStudy.click();
let universityOption = await driver.findElement(By.css(".custom-hr-select-container .custom-hr-select__menu-list .custom-hr-select__option:nth-child(96)"));
await universityOption.click();
await toStop(1000);

await selectArea.click();
let areaStudy = await driver.findElement(By.css(".custom-hr-select-container .custom-hr-select__menu-list .custom-hr-select__option:nth-child(10)"));
await areaStudy.click();
await toStop(1000);

await selectgradeStudy.click();
let gradeStudy = await driver.findElement(By.css(".custom-hr-select-container .custom-hr-select__menu-list .custom-hr-select__option:nth-child(3)"));
await gradeStudy.click();
await toStop(1000);

await selectstatus.click();
let status = await driver.findElement(By.css(".custom-hr-select-container .custom-hr-select__menu-list .custom-hr-select__option:nth-child(2)"));
await status.click();
await toStop(1000);

await selectyearStart.click();
let yearStart = await driver.findElement(By.css(".custom-hr-select-container .custom-hr-select__menu-list .custom-hr-select__option:nth-child(13)"));
await yearStart.click();
await toStop(1000);

await selectyearEnd.click();
let yearEnd = await driver.findElement(By.css(".custom-hr-select-container .custom-hr-select__menu-list .custom-hr-select__option:nth-child(16)"));
await yearEnd.click();
await toStop(1000);

let optionsecond = await driver.findElement(By.css('.sc-gGLxEB.dGJRan:nth-child(1)'));
await optionsecond.click();



}

openPage();
