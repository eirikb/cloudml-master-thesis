var Profile = function() {
	this.AWS = {
		EC2: {
			Instance: function() {
				this.AvailabilityZone = '';
				this.DisableApiTermination = '';
				this.ImageId = '';
				this.KernelId = '';
				this.KeyName = '';
				this.Monitoring = '';
				this.PlacementGroupName = '';
				this.PrivateIpAddress = '';
				this.RamDiskId = '';
				this.SecurityGroups = ['AWS::EC2::SecurityGroup'];
				this.SubnetId = '';
				this.Tags = ['AWS::EC2::Tags'];
				this.UserData = '';
				this.Volumes = ['AWS::EC2::MountPoin'];
				this.Description = '';
				this.meta = {
                    required: ['PlacementGroupName']
                }
			},
			SecurityGroup: function() {
				this.SecurityGroupIngress = 'AWS::EC"::SecurityGroupRole?';
				this.GroupDescription = '';
				this.Description = '';
				this.meta = {
                    required: ['GroupDescription']
                }
			},
			EIP: function() {
				this.Description = '';
			}
		}
	};
	this.Fn = {
		FindInMap: function() {

		}
	};
};

if (typeof module !== 'undefined' && module.exports) {
	exports.Profile = Profile;
}

