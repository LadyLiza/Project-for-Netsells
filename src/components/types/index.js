export function getPercentageForPersonalInfo(personalInfo) {
	let personalInfoFilingPercentage = 0;

	personalInfoFilingPercentage += personalInfo.firstName ? 25 : 0;
	personalInfoFilingPercentage += personalInfo.secondName ? 25 : 0;
	personalInfoFilingPercentage += personalInfo.email ? 25 : 0;
	personalInfoFilingPercentage += personalInfo.phone ? 25 : 0;

	return personalInfoFilingPercentage;
}

export function getPercentageForAdditionalInfo(additionalInfo) {
	let additionalInfoFilingPercentage = 0;

	additionalInfoFilingPercentage += additionalInfo.liveInUk !== '' ? 33 : 0;
	additionalInfoFilingPercentage += additionalInfo.githubProfile ? 33 : 0;
	additionalInfoFilingPercentage += additionalInfo.aboutYou ? 33 : 0;

	if (additionalInfoFilingPercentage === 99) {
		additionalInfoFilingPercentage = 100;
	}

	return additionalInfoFilingPercentage;
}

export function getPercentageForAdditionalFiles(additionalFiles) {
	let additionalFilesFilingPercentage = 0;

	additionalFilesFilingPercentage += additionalFiles.cv ? 50 : 0;
	additionalFilesFilingPercentage += additionalFiles.coverLetter ? 50 : 0;

	return additionalFilesFilingPercentage;
}
