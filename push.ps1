$CurrentDate = [datetime]::now.tostring("yyyy-MM-dd")
git add .
git commit -m "Updated $CurrentDate"
git push